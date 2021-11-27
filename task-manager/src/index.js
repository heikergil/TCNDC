const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");
const userRouter = require ('./routers/users')
const tasksRouter = require('./routers/tasks')
const morgan = require('morgan')


const app = express();
const port = process.env.PORT || 3000;


app.use(morgan('tiny'))
app.use(express.json());
app.use(userRouter)
app.use(tasksRouter)



app.listen(port, () => {
  console.log("Server is up on port " + port);
});
