const router = require('express').Router();
const authCrtr = require('../controllers/automatisation');


router.post('/', authCrtr.signUp);


module.exports = router
