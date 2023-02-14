const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        document.location.redirect('/home')
    } else {
        res.render('login')
    }
})

router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        document.location.redirect('/home')
    } else {
        res.render('signup')
    }
})

module.exports = router;