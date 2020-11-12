const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "name": "Golpistas.pe",
        "web": "golpistas.com"
    };
    res.json(data);
});


module.exports = router;