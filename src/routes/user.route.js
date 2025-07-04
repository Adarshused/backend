import {Router} from 'express'
import { upload } from '../middlewares/multer.middleware.js'
import {loginUser, logoutUser, registerUser} from '../controllers/User.controllers.js'
import { verifyJWT } from '../middlewares/Auth.middleware.js'

const router = Router()

router.route("/register").post(
    
    upload.fields([
        {
       name: "avatar",
       maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
),

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser)
export default router