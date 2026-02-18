import multer from 'multer'
import path from 'path'

export const storage = multer.diskStorage({
  destination: (req, file, cd) => {
    cd(null , 'upload')
  },
  filename: (req, file, cd) => {
    const newFileName = Date.now() + path.extname(file.originalname)
    cd(null, newFileName)
  }
})


export const fileFilter = (req, file, cd) => {
  if (file.mimetype.startsWith('image/')) {
    cd(null , true)
  } else {
    cd(new Error('Only Image are allow') ,false )
  }
}