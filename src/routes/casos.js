const { Router } = require('express');
const router = Router();

const casos = require('../models.json');

router.get('/', (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(casos);
});

module.exports = router;