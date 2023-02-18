const router = require('express').Router();
const { Post, User } = require('../models');

// render user's  posts 
router.get('/dashboard', async(req, res) => {
    try {
        const postData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] }, 
            include: [{ model: Post }],
        })

        const post = postData.get({plain: true})
        console.log(post)
        res.render('dashboard', {
            ...post, 
            loggedIn: true
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})

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
        loggedIn: req.session.loggedIn, 
    })
    } catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
    
})


module.exports = router;