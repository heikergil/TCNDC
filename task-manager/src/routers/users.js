const express = require('express')
const router = new express.Router()
const User = require('../models/user')

// Add user
router.post("/users", async (req, res) => {
    const user = new User(req.body);
  
    try {
      await user.save();
      res.status(201).send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  // Read users
  router.get("/users", async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // read user by id
  router.get("/user/:id", async (req, res) => {
    const _id = req.params.id;
  
    try {
      const user = await User.findById(_id);
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(500).send(e);
    }
  
  });
  
  router.patch('/user/:id', async (req, res) => {
      const updates = Object.keys(req.body)
      const allowedUpdates = ['name', 'email', 'password', 'age']
      const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
      if (!isValidOperation) {
          return res.status(400).send({error: 'Invalid updates'})
      }
      try {
        const user = await User.findById(req.params.id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        
          if (!user) {
              return res.status(400).send()
          }
  
          res.send(user)
      } catch (e) {
          console.log(e)
              res.status(400).send(e)
      }
  })

  router.delete('/user/:id', async (req, res) => {
    const _id = req.params.id;

    try {
      const user = await User.findByIdAndDelete(_id);
      
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(500).send(e);
    }
})


module.exports = router