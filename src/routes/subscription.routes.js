import { Router } from "express"
import { verifyJWT } from "../middlewares/auth.middleware.js"
import { getSubscribedChannels, getUserChannelSubscribers, toggleSubscription } from "../controllers/subscription.controller.js"


const router = Router();

router.use(verifyJWT)
router
    .route("/c/:subscriberId")
    .get(getUserChannelSubscribers)
    .post(toggleSubscription)

router.route("/u/:subscriberId").get(getSubscribedChannels)