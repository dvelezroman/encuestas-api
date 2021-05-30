const multer = require('multer')
const path = require('path')

const csvFilter = (req, file, cb) => {
  if (file.mimetype.includes('csv')) {
    cb(null, true)
  } else {
    const response = 'Please upload only csv file.'
    cb(response, false)
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '/resources/static/assets/uploads/'))
  },
  filename: (req, file, cb) => {
    console.log(file.originalname)
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`)
  }
})

const uploadFile = multer({ storage: storage, fileFilter: csvFilter })

module.exports = uploadFile
