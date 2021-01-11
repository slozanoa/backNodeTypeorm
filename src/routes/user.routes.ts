import {Router} from 'express'
import {getUsers,createUser,getUser} from '../controllers/user.controller'

const router = Router()

router.get('/users',getUsers)
router.post('/users',createUser)
router.get('/users/:id',getUser)
export default router