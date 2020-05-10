const { Router } = require('express');
const router = Router();

const casos = require('../models.json');

router.get('/', (req, res) =>{
    res.json(casos);
});

module.exports = router;