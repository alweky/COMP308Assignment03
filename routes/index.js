var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { active1: 'active', active2: '', active3: 'has-dropdown' });
});

/* GET about page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { active2: 'active', active1: '', active3: '' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { active3: 'has-dropdown active', active1: '', active2: '' });
});

/* GET sub projects page. */
router.get('/projects/projectAdvancedSpaceWars', function(req, res, next) {
  res.render('projects/projectAdvancedSpaceWars', { title: 'Projects' });
});

router.get('/projects/projectAndroidHealth', function(req, res, next) {
  res.render('projects/projectAndroidHealth', { title: 'Projects' });
});

router.get('/projects/projectJumper', function(req, res, next) {
  res.render('projects/projectJumper', { title: 'Projects' });
});

router.get('/projects/projectSolarSystem', function(req, res, next) {
  res.render('projects/projectSolarSystem', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contactMe', { title: 'Contact Me' });
});

module.exports = router;
