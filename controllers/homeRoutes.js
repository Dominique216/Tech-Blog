const router = require('express').Router();
const { Post, User } = require('../models');


// rendering login page
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        document.location.redirect('/homepage')
    } else {
        res.render('login')
    }
})

// rendering signup page
router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        document.location.redirect('/homepage')
    } else {
        res.render('signup')
    }
})

// render homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{
                model: User, 
                attributes: ['name']
            }]
        })
    const posts= postData.map((post) => post.get({plain:true}))
    res.render('homepage', {
        posts, 
        loggedIn: req.session.loggedIn
    })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
    
})


module.exports = router;