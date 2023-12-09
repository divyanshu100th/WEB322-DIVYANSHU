const express = require('express');
const userService = require('../services/userService');
const productService = require('../services/productService');
const authService = require('../services/authService');

const router = express.Router();

// User routes
router.get('/users', userService.getAllUsers);
router.get('/users/:id', userService.getUserById);
router.post('/users', userService.createUser);
router.put('/users/:id', userService.updateUser);
router.delete('/users/:id', userService.deleteUser);

// Product routes
router.get('/products', productService.getAllProducts);
router.get('/products/:id', productService.getProductById);
router.post('/products', productService.createProduct);
router.put('/products/:id', productService.updateProduct);
router.delete('/products/:id', productService.deleteProduct);

// Authentication route
router.post('/login', authService.authenticate);

module.exports = router;
