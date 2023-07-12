import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/", Services.SubscriptionService.getSubscriptions);
router.post("/", Services.SubscriptionService.addSubscription);
router.delete("/:id", Services.SubscriptionService.removeSubscription);
router.put("/:id", Services.SubscriptionService.updateSubscription);

export default router;