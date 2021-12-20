const express = require("express");
require("./db/mongoose");

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


// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//   // const task = await Task.findById('61bff1b639088f40086f8f3d')
//   // console.log(task)
//   // await task.populate('owner').execPopulate()
//   // console.log(task.owner)

  
//   const user = await User.findById('61bffcb5e401e925587d9477')
//   await user.populate('tasks').execPopulate()
//   console.log(user.tasks)
// }

// main()
