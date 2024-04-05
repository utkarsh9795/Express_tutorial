import express from 'express'
const router = express.Router()
import StudentController from '../controllers/studentController.js'

router.get('/getsessioninfo', StudentController.get_sesssion_info)
router.get('/deletesession', StudentController.delete_session)
router.get('/regnsession', StudentController.regn_session)
router.get('/examplesession', StudentController.session_example)
router.get('/getdata', StudentController.get_session_data)

export default router