const router = require('express').Router();
const { Post, User, Comment} = require('../models');

// Find all Posts on Homepage
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'content',
      'title',
      'created_at',
    ],
    order:[['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'feedback', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    // console.log(req.session.username)

      res.render('homepage', {
      posts, loggedIn: req.session.loggedIn, user_id: req.session.username
    });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'content',
      'title',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'feedback', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });
      res.render('single-post', {
        post, 
        loggedIn: req.session.loggedIn,
        user_id: req.session.username
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Takes user to login page
router.get('/login', (req, res) => {
 if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
