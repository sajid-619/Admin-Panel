import { Router } from "express";
const router = Router();

import * as partnerController from "../controllers/partnerControllers.js";
import * as middleware from "../middlewares/verifyToken.js";

// Create single partner
router.post(
  "/",
  middleware.verifyTokenAndAdmin,
  partnerController.createPartner
);

// Update single partner
router.put(
  "/:id",
  middleware.verifyTokenAndAdmin,
  partnerController.updatePartnerById
);

// Delete single partner
router.delete(
  "/:id",
  middleware.verifyTokenAndAdmin,
  partnerController.deletePartnerById
);

// Get single partner
router.get("/find/:id", partnerController.getPartnerById);

// Get all partners
router.get("/", partnerController.getAllPartners);

export default router;