import { Router } from "express";

import { HomeController } from "../controllers/home.controller";
import { SearchController } from "../controllers/search.controller";

const router = Router();

router.get("/", HomeController);
router.get("/cats", HomeController);
router.get("/dogs", HomeController);
router.get("/fishes", HomeController);
router.get("/search", SearchController);

export default router;