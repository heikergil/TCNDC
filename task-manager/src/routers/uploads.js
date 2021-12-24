const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = new express.Router()



router.post('/upload', upload.single('fall'), async (req, res) => {
    // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   res.send(req.body)
})


module.exports = router