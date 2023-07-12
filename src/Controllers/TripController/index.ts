import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/", Services.TripService.getTrips);
router.post("/", Services.TripService.addTrip);
router.delete("/:id", Services.TripService.removeTrip);
router.put("/:id", Services.TripService.updateTrip);

export default router;