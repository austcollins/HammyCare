const { resolve } = require('dns');
var express = require('express')
var router = express.Router()
var handlebars = require('handlebars');
const fs = require('fs')

router.get('/timeline', function (req, res) {
    res.render('timeline');
});

router.get('/:pageName', function (req, res) {
    const partialName = req.params.pageName;
    const partialPath = './views/page/' + partialName + '.handlebars';
    console.log(partialPath);
    if (fs.existsSync(partialPath)) {
        res.render('page/' + partialName, {layout: 'page'});
    } else {
      res.status(404).render('error/404');
    }
  })

router.get('/', function (req, res) {
    res.render('home');
});

module.exports = router;