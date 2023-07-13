const express = require('express');
const bodyParser = require('body-parser');
const { Recipe } = require('./models');
const PORT = 4000;
require('dotenv').config();

const app = express();
app.use(bodyParser.json());


// GET /recipes
app.get('/recipes', async (req, res) => {
  const recipes = await Recipe.findAll();
  res.json(recipes);
});

// GET /recipes/:id
app.get('/recipes/:id', async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id);
  if (recipe) {
      res.json(recipe);
  } else {
      res.status(404).send('Recipe not found');
  }
});

// POST /recipes
app.post('/recipes', async (req, res) => {
  try {
      const { title, description, ingredients, instructions } = req.body;
      const recipe = await Recipe.create({ title, description, ingredients, instructions });
      res.json(recipe);
  } catch (err) {
      res.status(400).send(err.errors);
  }
});

// PATCH /recipes/:id
app.patch('/recipes/:id', async (req, res) => {
  try {
      const { title, description, ingredients, instructions } = req.body;
      const recipe = await Recipe.findByPk(req.params.id);
      if (recipe) {
          await recipe.update({ title, description, ingredients, instructions });
          res.json(recipe);
      } else {
          res.status(404).send('Recipe not found');
      }
  } catch (err) {
      res.status(400).send(err.errors);
  }
});

// DELETE /recipes/:id
app.delete('/recipes/:id', async (req, res) => {
  const recipe = await Recipe.findByPk(req.params.id);
  if (recipe) {
      await recipe.destroy();
      res.status(204).end();
  } else {
      res.status(404).send('Recipe not found');
  }
});

app.listen(4000, () => console.log(`Server is listening on ${PORT}`));