const express = require('express');

const productController = require('../controller/productController');

const productRoute = express.Router();

productRoute.get('/accessories',productController.accessories);
productRoute.get('/laptops',productController.laptops);
productRoute.get('/macbook',productController.macbook);
productRoute.get('/mobiles',productController.mobile);
productRoute.get('/ipads',productController.ipads);
productRoute.get('/allproducts',productController.getAllProducts);
productRoute.get('/:id',productController.getAllProductbyID);
productRoute.post('/addData',productController.addProductData);

module.exports=productRoute;