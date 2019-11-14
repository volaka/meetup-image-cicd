const expressRouter = require('express').Router;

const router = expressRouter();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
