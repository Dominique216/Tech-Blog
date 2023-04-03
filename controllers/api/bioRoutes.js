const router = require('express').Router();
const { User } = require('../../models');

router.put('/:id', async(req,res) => {
    try {
        const newBio = await User.update(req.body, 
            {where: { id: req.params.id}}
        )
        res.status(200).json(newBio)
    } catch(err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;