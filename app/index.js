const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const userRouter = require("./routes/user");
const exercisesRouter = require("./routes/exercises");
const routinesRouter = require("./routes/routines");



const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/exercises', exercisesRouter);
app.use('/api/routines', routinesRouter);

module.exports = app;