var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome Page' });
});

/* GET about page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
