import { Router } from "express";
import { getCourses, createCourse, getCourseId } from "../controllers/course.controller.js";
const router = Router();
router.get("/", getCourses);
router.post("/", createCourse);
router.get("/:id", getCourseId);
export default router;