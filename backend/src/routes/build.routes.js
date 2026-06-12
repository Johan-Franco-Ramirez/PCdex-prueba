import { Router } from "express";

import {
  getBuilds,
  createBuild
} from "../controllers/build.controller.js";

const router = Router();

router.get("/", getBuilds);

router.post("/", createBuild);

export default router;