const express      = require('express');
const router       = express.Router();
const heroes       = require('./../controller/heroesController');
const baseurl      = '/api/heroes';

/* GET contact listing. */
router.get(baseurl, heroes.getAllHeroes);
router.post(baseurl, heroes.createHero);

module.exports = router;