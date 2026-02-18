import express from 'express'
const router = express.Router()
import { showAlldata, showStudent, addStudent, updateStudent, deleteStudnet } from '../Controll/Controll.js'
import multer from 'multer'
import { storage, fileFilter } from '../Controll/storageControl.js'

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize : 1024 * 1024 * 5
  }
})

router.get('/', showAlldata)
router.get('/:id',showStudent )
router.post("/", upload.single('picture'), addStudent);
router.put("/:id", updateStudent);
router.delete('/:id', deleteStudnet)

export default router