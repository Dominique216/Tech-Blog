const router = require('express').Router();
const { response } = require('express');
const { Post, User, Comment } = require('../models');

// render comment page 
router.get('/comment/:id', async (req, res) => {
    if(req.session.loggedIn) {
        try {
        const postData = await Post.findByPk(req.params.id)
        const post = postData.get({plain: true})
        console.log(post)
        res.render('comment', {
            post,
            loggedIn: true
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
    } else {
        res.redirect('/login')
    }
    
})


// render EditPost card
router.get('/editpost/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id)
        const post = postData.get({plain: true})
        console.log(post)
        res.render('editpost', {
            post,
            loggedIn: true
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})

// render NewPost card
router.get('/newpost', (req, res) => {
    if(req.session.loggedIn) {
        res.render('newpost')
    }
})

// render user's posts on dashboard tab
router.get('/dashboard', async(req, res) => {
    if(req.session.loggedIn) {
         try {
        const postData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] }, 
            include: [{ model: Post }],
        })

        const post = postData.get({plain: true})
        res.render('dashboard', {
            ...post, 
            loggedIn: req.session.loggedIn
        });
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
    } else {
        res.redirect('/login')
    }
   
})

// rendering login page
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/')
    } else {
        res.render('login')
    }
})

// rendering signup page
router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
       res.redirect('/')
    } else {
        res.render('signup')
    }
})

// render homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({ 
            include: [{
                model:Comment,
                include: [{model: User}]
            },
            {
                model: User, 
                attributes: ['name']
            }], 
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

// router.get('/comments', async (req, res) => {
//     try {
//        const allComments = await Comment.findAll() 
//        res.status(200).json(allComments)
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// })

// router.get('/posts', async (req, res) => {
//     try {
//        const allComments = await Post.findAll({
//         include: [{model: Comment}]
//        }) 
//        res.status(200).json(allComments)
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }
// })

module.exports = router;