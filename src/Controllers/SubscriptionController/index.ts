import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getSubscriptions", Services.SubscriptionService.getSubscriptions);
router.post("/addSubscription", Services.SubscriptionService.addSubscription);
router.delete("deleteSubscription/:id", Services.SubscriptionService.removeSubscription);
router.put("updateSubscription/:id", Services.SubscriptionService.updateSubscription);

export default router;