import {Router} from "express"
import { loginUser, registerUser,logoutUser, forgotPassword ,resetPassword,userLoggedInController} from "../controllers/user.controller.js"

const router=Router()


router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(logoutUser)
router.route("/forgotPassword").put(forgotPassword)
router.route("/resetPassword/:token").put(resetPassword)
router.route("/userLoggedIn").get(userLoggedInController)

export default router