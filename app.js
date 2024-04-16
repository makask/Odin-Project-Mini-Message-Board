import express from "express";
import indexRouter from "./routes/index.js";
import newRouter from "./routes/new.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/', indexRouter);
app.use('/new', newRouter);

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});

