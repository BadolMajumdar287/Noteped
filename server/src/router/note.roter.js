import { Router } from "express";
import { NoteController } from "../controller/note.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

export const NoteRouter = Router();

const N = new NoteController();

NoteRouter.post("/create", authMiddleware, N.create);

NoteRouter.get("/get", authMiddleware, N.getAllNote);

NoteRouter.get("/get/:id",authMiddleware, N.getByNoteId);

NoteRouter.delete("/delete/:id",authMiddleware, N.delete);

NoteRouter.put("/update/:id",authMiddleware, N.update);