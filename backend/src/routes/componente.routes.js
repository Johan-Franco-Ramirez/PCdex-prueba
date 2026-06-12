import { Router } from "express";

import {
  getComponentes,
  createComponente
} from "../controllers/componente.controller.js";

const router = Router();

router.get("/", getComponentes);

router.post("/", createComponente);

export default router;