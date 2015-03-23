var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { active1: 'active', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

/* GET about page. */
router.get('/aboutMe', function(req, res, next) {
  res.render('aboutMe', { active1: '', active2: 'active', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

/* GET sub projects page. */
router.get('/projectAdvancedSpaceWars', function(req, res, next) {
  res.render('projectAdvancedSpaceWars', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

router.get('/projectAndroidHealth', function(req, res, next) {
  res.render('projectAndroidHealth', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

router.get('/projectJumper', function(req, res, next) {
  res.render('projectJumper', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

router.get('/projectSolarSystem', function(req, res, next) {
  res.render('projectSolarSystem', { active1: '', active2: '', active3: 'has-dropdown', active3a: 'active', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: 'active', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

/* GET sub services page. */
router.get('/servicesDevelopment', function(req, res, next) {
  res.render('servicesDevelopment', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: 'active', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

router.get('/servicesTutoring', function(req, res, next) {
  res.render('servicesTutoring', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: 'active', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

router.get('/servicesWebDesign', function(req, res, next) {
  res.render('servicesWebDesign', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: 'active', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});


/* GET contact page. */
router.get('/contactMe', function(req, res, next) {
  res.render('contactMe', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: 'active', active6: 'hide-for-medium', active6a: '' });
});

/* GET siteMap page. */
router.get('/siteMap', function(req, res, next) {
  res.render('siteMap', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: 'active' });
});

/* GET terms page. */
router.get('/terms', function(req, res, next) {
  res.render('terms', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

/* GET policy page. */
router.get('/policy', function(req, res, next) {
  res.render('policy', { active1: '', active2: '', active3: 'has-dropdown', active3a: '', active4: 'has-dropdown', active4a: '', active5: 'hide-for-medium', active5a: '', active6: 'hide-for-medium', active6a: '' });
});

module.exports = router;
