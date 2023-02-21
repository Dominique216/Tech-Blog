const router = require('express').Router();
const { User, Post } = require('../../models');

// create new post
router.post('/', async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body, 
        user_id: req.session.user_id,
      });

    res.status(200).json(newPost);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

// update post
// router.put('/:id', withAuth, async (req, res) => {
//   try{
//       const newScore = await User.update(req.body, {
//           where: {
//               id: req.params.id,
//           }, 
//       })
//       res.status(200).json(newScore)
//   } catch (err) {
//       console.log(req)
//       console.log(err)
//       res.status(500).json(err)
//   }     
// })
router.put('/:id', async (req, res) => {
  try{
      const updatePost = await Post.update(req.body, {
          where: {
              id: req.params.id,
          }, 
      })
      console.log(updatePost)
      res.status(200).json(updatePost)
  } catch (err) {
      console.log(req)
      console.log(err)
      res.status(500).json(err)
  }     
})
// delete post
router.delete('/delete/:id', async (req, res) => {
  try{
      const deletePost = await Post.destroy({
          where: {
              id: req.params.id,
              // user_id: req.session.user_id,
          }, 
      })
      console.log(deletePost)
      res.status(200).json(deletePost)
  } catch (err) {
      console.log(req)
      console.log(err)
      res.status(500).json(err)
  }     
})

  module.exports = router;