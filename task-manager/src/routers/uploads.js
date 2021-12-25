const express = require('express')
const multer  = require('multer')
const router = new express.Router()


const upload = multer({ 
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('File must be a word document.'))
        }

        cb(undefined, true)
    }
 })

 const errorMiddleware = (req, res, next) => {
     throw new Error('From my middleware')
 }

router.post('/upload', errorMiddleware, upload.single('upload'), async (req, res) => {
    
   res.send()
}, (error, req, res, next) => {
    res.status(400).send()
})


module.exports = router