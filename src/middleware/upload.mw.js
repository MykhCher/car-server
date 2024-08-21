const path = require('path');
// =====
const multer = require('multer');
// =====
const { staticPath } = require('../config/staticConfig');


const carLogoStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(staticPath, 'images', 'logos'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const filterCarLogo = (req, file, cb) => {
    if (file.mimetype.match(/^image\//)) {
        return cb(null, true);
    }
    cb(null, false)
} 

module.exports.uploadLogo = multer({ 
    storage: carLogoStorage,
    fileFilter: filterCarLogo
});