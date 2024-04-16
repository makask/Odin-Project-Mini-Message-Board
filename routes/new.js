import express from "express";
import messages from "../messages.js";

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("form.ejs");
});

router.post("/", (req, res, next) => {
    const { text, user} = req.body;
    const msg = {
        text: text,
        user: user,
        added: new Date(Date.now()).toLocaleString()
    }
    messages.push(msg);
    res.redirect("/");
});

export default router;

