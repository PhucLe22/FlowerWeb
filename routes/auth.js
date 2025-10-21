const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/login');
const { logoutUser } = require('../controllers/logout');
const isLogin = require('../middlewares/isLogin');


// Login route
router.post('/login', express.json(), loginUser);

router.get('/', (req, res) => {
    res.render('login');
});
router.get('/home', isLogin, (req, res) => {
    res.render('home');
});
router.get('/logout', logoutUser);

module.exports = router;
