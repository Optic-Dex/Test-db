const express = require('express');
const router = express.Router();
const services = require('../services/services.js');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await services.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting data `, err.message);
    next(err);
  }
});
module.exports = router;