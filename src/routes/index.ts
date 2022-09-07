import { Router } from "express";

import * as HomeController from "../controllers/page.controller";
import { SearchController } from "../controllers/search.controller";

const router = Router();

router.get("/", HomeController.home);
router.get("/dogs", HomeController.dogs);
router.get("/cats", HomeController.cats);
router.get("/fishes", HomeController.fisher);
router.get("/search", SearchController);

export default router;