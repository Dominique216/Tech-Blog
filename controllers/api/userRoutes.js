const router = require('express').Router();
const { User } = require('../../models');
const multer = require('multer')
const path = require('path')

// 
router.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll()
    res.status(200).json(allUsers)
  } catch (err) {
    console.log(err)
  }
  
})

// saves new user and session info
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
      console.log(userData)
    });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// find if user exists then saves session data
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { name: req.body.name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect name or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect name or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// updates user info
router.put('/:id', async(req,res) => {
  try {
      const updateUser = await User.update(req.body, 
          {where: { id: req.params.id}}
      )
      res.status(200).json(updateUser)
  } catch(err) {
      console.log(err);
      res.status(500).json(err)
  }
})

// destroys session data
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// stores image file
const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname)
  }
})
// upload avatar image file
const upload = multer({
  storage: storage,
  limits: { fileSize: '1000000' },
  // fileFilter: (req, file, cb) => {
  //     const fileTypes = /jpeg|jpg|png|gif/
  //     const mimeType = fileTypes.test(file.mimetype)  
  //     const extname = fileTypes.test(file.originalname)

  //     if(mimeType && extname) {
  //         return cb(null, true)
  //     }
  //     cb('Give proper files formate to upload')
  // }
}).single('image')

// updates user avatar
router.put('/image/:id', (req, res) => { 
  upload(req, res, (err) => {
    if(err) {
      console.log(err)
    } else { 
      const newImage = User.update(
        {image: req.file.filename}, 
        {where: { id: req.params.id}})
        res.status(200).json(newImage)
    }
  })
  
})

module.exports = router;