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

// updates post
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