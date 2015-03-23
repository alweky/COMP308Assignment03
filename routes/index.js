var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { active1: 'active', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: '' });
});

/* GET about page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { active1: '', active2: 'active', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: '' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '' });
});

/* GET sub projects page. */
router.get('/projectAdvancedSpaceWars', function(req, res, next) {
  res.render('projectAdvancedSpaceWars', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '' });
});

router.get('/projectAndroidHealth', function(req, res, next) {
  res.render('projectAndroidHealth', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '' });
});

router.get('/projectJumper', function(req, res, next) {
  res.render('projectJumper', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '' });
});

router.get('/projectSolarSystem', function(req, res, next) {
  res.render('projectSolarSystem', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: 'active' });
});

/* GET sub services page. */
router.get('/servicesDevelopment', function(req, res, next) {
  res.render('servicesDevelopment', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: 'active' });
});

router.get('/servicesTutoring', function(req, res, next) {
  res.render('servicesTutoring', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: 'active' });
});

router.get('/servicesWebDesign', function(req, res, next) {
  res.render('servicesWebDesign', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: 'active' });
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contactMe', { title: 'Contact Me' });
});

module.exports = router;
