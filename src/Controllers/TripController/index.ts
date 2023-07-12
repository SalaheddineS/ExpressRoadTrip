import Services from "../../Services";
import { Router } from "express";

const router = Router();

router.get("/getTrips", Services.TripService.getTrips);
router.post("/addTrip", Services.TripService.addTrip);
router.delete("/removeTrip/:id", Services.TripService.removeTrip);
router.put("/updateTrip/:id", Services.TripService.updateTrip);

export default router;