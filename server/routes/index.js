const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('<b>Graviton EDO</b>');
});

module.exports = router;
