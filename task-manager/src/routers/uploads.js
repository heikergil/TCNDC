const express = require('express')
const app = express()
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



router.post('/upload', upload.single('upload'), async (req, res) => {
    
   res.send()
}, (error, req, res, next) => {
    res.status(400).send({Error: error.message})
})


module.exports = router