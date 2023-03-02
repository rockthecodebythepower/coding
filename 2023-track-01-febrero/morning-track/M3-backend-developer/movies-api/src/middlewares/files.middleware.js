const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'movies',
  allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
})

const upload = multer({ storage })

// TODO: Mirar el delete - error al eleiminar en cloudinary
const deleteImgCloudinary = (imgUrl) => {
  console.log(imgUrl)
  const [, , , ...imgComponents] = imgUrl.split('/')
  const [imgName] = imgComponents[imgComponents.length - 1].split('.')
  console.log(imgName)
  const publicId = `${imgComponents[imgComponents.length - 2]}/${imgName}`
  console.log(publicId)
  cloudinary.uploader.destroy(publicId, (error, result) => {
    if (error) {
      console.error(`Error deleting image in Cloudinary: ${error.message}`)
      return
    }

    console.log(`Image deleted in Cloudinary: ${result}`)
  })
}

module.exports = { upload, deleteImgCloudinary }
