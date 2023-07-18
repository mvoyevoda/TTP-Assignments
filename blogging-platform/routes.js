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

router.post('/posts', async (req, res) => {
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

router.patch('/posts/:id', async (req, res) => {
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

router.delete('/posts/:id', async (req, res) => {
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

router.post('/comments', async (req, res) => {
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

router.patch('/comments/:id', async (req, res) => {
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


router.delete('/comments/:id', async (req, res) => {
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

// Export the router
module.exports = router;