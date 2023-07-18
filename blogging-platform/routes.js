const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const session = require('express-session');
const User = require('./models/user.js');
const Post = require('./models/post.js');
const Comment = require('./models/comment.js');

// Middleware for authorization
const authorize = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'You must be logged in to access this route' });
  }
  next();
};

// User registration route
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword
    });

    delete newUser.dataValues.password;
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// User login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    // console.log('User found:', user);
  
    if (!user) {
      // console.log('Invalid username or password');
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    const validPassword = await bcrypt.compare(password, user.password);
    // console.log('Password comparison result:', validPassword);
  
    if (!validPassword) {
      // console.log('Invalid username or password');
      return res.status(401).json({ error: 'Invalid username or password' });
    }
  
    req.session.user = { id: user.id, username: user.username };
    delete user.dataValues.password;
    // console.log('Login successful:', user);
    res.status(200).json(req.session.user);
  } catch (error) {
    console.log('Login failed:', error);
    res.status(500).json({ error: 'Login failed' });
  }
  
});

// User logout route
router.post('/logout', authorize, (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.status(200).json({ message: 'Successfully logged out' });
  });
});


router.get('/', (req, res) => {
  res.send("Welcome to the Blogging Platform!")
});


// ----------------------------------------------------------------
// Users Table Endpoints:

router.get('/users', authorize, async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// ----------------------------------------------------------------
// Posts Table Endpoints:

router.get('/posts', authorize, async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/posts/:id', authorize, async (req, res) => {
  try {
    const postId = req.params.id; // Get the post ID from the request parameters
    const post = await Post.findByPk(postId); // Find the post by its ID

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/posts', authorize, async (req, res) => {
  try {
    const { author, content } = req.body; // Get post data from the request body

    // Create the post
    const post = await Post.create({
      author: author,
      content: content
    });

    res.status(201).json(post); // Return the created post in the response
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.patch('/posts/:id', authorize, async (req, res) => {
  try {
    const postId = req.params.id; // Get the post ID from the request parameters
    const { author, content } = req.body; // Get updated post data from the request body

    // Find the post by its ID
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Update the post with new data
    if (author) {
      post.author = author;
    }
    if (content) {
      post.content = content;
    }
    await post.save();

    res.json(post); // Return the updated post in the response
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/posts/:id', authorize, async (req, res) => {
  try {
    const postId = req.params.id; // Get the post ID from the request parameters

    // Find the post by its ID
    const post = await Post.findByPk(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Delete the post
    await post.destroy();

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// ----------------------------------------------------------------
// Comments Table Endpoints:

router.get('/comments', authorize, async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.json(comments)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/comments/:id', authorize, async (req, res) => {
  try {
    const commentId = req.params.id; // Get the comment ID from the request parameters
    const comment = await Comment.findByPk(commentId); // Find the comment by its ID

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(comment);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/comments', authorize, async (req, res) => {
  try {
    const { author, content, postId } = req.body; // Get comment data from the request body

    // Create the comment
    const comment = await Comment.create({
      author: author,
      content: content,
      postId: postId
    });

    res.status(201).json(comment); // Return the created comment in the response
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.patch('/comments/:id', authorize, async (req, res) => {
  try {
    const commentId = req.params.id; // Get the comment ID from the request parameters
    const { author, content, postId } = req.body; // Get updated comment data from the request body

    // Find the comment by its ID
    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Update the comment with new data
    if (author) {
      comment.author = author;
    }
    if (content) {
      comment.content = content;
    }
    if (postId) {
      comment.postId = postId;
    }
    await comment.save();

    res.json(comment); // Return the updated comment in the response
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.delete('/comments/:id', authorize, async (req, res) => {
  try {
    const commentId = req.params.id; // Get the comment ID from the request parameters

    // Find the comment by its ID
    const comment = await Comment.findByPk(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    // Delete the comment
    await comment.destroy();

    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// ----------------------------------------------------------------

module.exports = router;