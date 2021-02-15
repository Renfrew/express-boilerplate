const express = require('express');

const router = express.Router();

// GET home page.
router.get('/index', (req, res, next) => {
  res.status(200).send({ title: 'Express' });
});
module.exports = router;
