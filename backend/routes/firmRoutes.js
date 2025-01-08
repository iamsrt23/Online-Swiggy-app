const express = require('express');
const firmController = require('../controllers/firmController');
const verifyToken = require('../middlewares/verifytoken');


const router = express.Router()

router.post('/add-firm', verifyToken, firmController.addFirm);
// Uploading Images using Routes
router.get('/uploads/:imageName',(req,res)=>{
    const imageName = req.params.imageName;
    res.headersSent('Content-Type')
    res.sendFile(path.join(__dirname,'..','uploads',imageName))
})

router.delete('/:firmId',firmController.deleteFirmById)



module.exports = router;