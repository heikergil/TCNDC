const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')
const multer  = require('multer')
const { sendWelcomeEmail, sendEmailWhenUserIsDeleted } = require("../emails/account")


// Add user
router.post("/users", async (req, res) => {
    const user = new User(req.body);
  
    try {
      await user.save();
      sendWelcomeEmail(user.email, user.name)
      const token = await user.generateAuthToken()
      res.status(201).send({user, token});
    } catch (e) {
      res.status(400).send(e);
    }
  });
    // login user
  router.post('/users/login', async (req, res) => {
    try {
      const user = await User.findByCredentials(req.body.email, req.body.password)
      const token = await user.generateAuthToken()
      res.send({user, token})
    } catch (e) {
      res.status(400).send()
    }
  })
//: user.getPublicProfile()

  // logout
  router.post('/users/logout', auth, async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token
      })

      await req.user.save()

      res.send()
    } catch (e) {
      res.status(500).send()
    }
  })


  router.post('/users/logoutAll', auth, async (req, res) => {
    try {
      req.user.tokens = []
      await req.user.save()
      res.send()
    } catch (error) {
      res.status(500).send()
      
    }
  })
  
  // Read users
  router.get("/users/me", auth, async (req, res) => {
    res.send(req.user)
  });
  
  
  
  router.patch('/user/me', auth,  async (req, res) => {
      const updates = Object.keys(req.body)
      const allowedUpdates = ['name', 'email', 'password', 'age']
      const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
  
      if (!isValidOperation) {
          return res.status(400).send({error: 'Invalid updates'})
      }
      try {

        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
          
          res.send(req.user)
      } catch (e) {
          console.log(e)
              res.status(400).send(e)
      }
  })

  router.delete('/users/me', auth, async (req, res) => {

    try {
            
      await req.user.remove()
      sendEmailWhenUserIsDeleted(req.user.email, req.user.name)
      res.send(req.user)
    } catch (e) {
      res.status(500).send(e);
    }
})

const upload = multer({ 
  dest: 'avatars',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('File must be jpg, jpeg or png only.'))
    }

    cb(undefined, true)
}
})

router.post('/users/me/avatar', upload.single('avatar'), async (req, res) => {

  res.send()
})


module.exports = router