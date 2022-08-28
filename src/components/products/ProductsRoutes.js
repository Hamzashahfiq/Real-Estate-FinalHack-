const router = require('express').Router();
const ProductsController = require('../products/ProductsController')
const authUtil = require('../../utils/Auth')

router.post('/addProperty',authUtil.auth,ProductsController.addProperty);
router.get('/getProperty',ProductsController.getProperty);
router.post('/deleteProperty',authUtil.auth,ProductsController.deleteProperty);

module.exports = router;