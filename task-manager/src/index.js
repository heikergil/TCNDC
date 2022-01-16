const express = require("express");
require("./db/mongoose");

const userRouter = require ('./routers/users')
const tasksRouter = require('./routers/tasks')
const uploadsRouter = require('./routers/uploads')
const morgan = require('morgan')


const app = express();
const port = process.env.PORT;


app.use(morgan('tiny'))
app.use(express.json());
app.use(userRouter)
app.use(tasksRouter)
app.use(uploadsRouter)


app.listen(port, () => {
  console.log("Server is up on port " + port);
});



