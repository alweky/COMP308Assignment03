var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { active1: 'active', active2: '', active3: 'has-dropdown', active3a: '' });
});

/* GET about page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { active2: 'active', active1: '', active3: 'has-dropdown', active3a: '' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { active3: 'has-dropdown', active1: '', active2: '', active3a: 'active' });
});

/* GET sub projects page. */
router.get('/projectAdvancedSpaceWars', function(req, res, next) {
  res.render('projectAdvancedSpaceWars', { active3: 'has-dropdown', active1: '', active2: '', active3a: 'active' });
});

router.get('/projectAndroidHealth', function(req, res, next) {
  res.render('projectAndroidHealth', { active3: 'has-dropdown', active1: '', active2: '', active3a: 'active' });
});

router.get('/projectJumper', function(req, res, next) {
  res.render('projectJumper', { active3: 'has-dropdown', active1: '', active2: '', active3a: 'active' });
});

router.get('/projectSolarSystem', function(req, res, next) {
  res.render('projectSolarSystem', { active3: 'has-dropdown', active1: '', active2: '', active3a: 'active' });
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
