const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    const data = {
        "name": "Homer",
        "web": "homer.com"
    };
    res.json(data);
});


module.exports = router;