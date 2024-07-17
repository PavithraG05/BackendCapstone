const express = require('express')
const router = express.Router()
const Users = require('../models/user')
// router.use(express.json());

router.get('/', async(req, res) => {
    // res.status(200).send('Fetching all genres')
    console.log("In user routes");
    try{
        const user = await Users.findAll();
        res.status(200).json(user)
        console.log('All users:', JSON.stringify(user, null, 2))
    }catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/', async (req, res) => {
    const {username, password} = req.body;
    const user = await Users.findOne({where:{username:username}});
    console.log(user);
    if (user && user.password === password) {
    //   const token = jwt.sign({id: user._id}, 'secret-key');
      res.status(200).json(true);
    } else {
      res.status(401).json(false);
    }
  });


module.exports = router