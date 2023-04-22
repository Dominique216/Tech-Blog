const router = require('express').Router();
const { Comment } = require('../../models');

// creates new comment
router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body, 
        user_id: req.session.user_id,
      });

    res.status(200).json(newComment);
    } catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });

router.delete('/:id', async(req, res) => {
  try {
    const deleteComment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(deleteComment)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
})
module.exports = router;