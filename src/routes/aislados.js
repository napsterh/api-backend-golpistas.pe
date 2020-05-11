const { Router } = require('express');
const router = Router();

const aislados = require('../aislados.json');

router.get('/', (req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(aislados);
});

module.exports = router;