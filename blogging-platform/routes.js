const express = require('express');
const router = express.Router();
const User = require('./models/user.js');
const Post = require('./models/post.js');
const Comment = require('./models/comment.js');

// ----------------------------------------------------------------
// Users Table Endpoints:

router.get('/users', async (req, res) => {
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

router.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll()
    res.json(posts)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/posts/:id', async (req, res) => {
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

// ----------------------------------------------------------------
// Comments Table Endpoints:

router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.json(comments)
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/comments/:id', async (req, res) => {
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


// Export the router
module.exports = router;