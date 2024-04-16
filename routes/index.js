import express from "express";
import messages from "../messages.js";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("index.ejs", { title: "Mini Messageboard", messages : messages });
});

export default router;