const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const tasksRoutes = require("./routes/tasks.routes")

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); //read json body

// use tasksRoutes as router
app.use(tasksRoutes);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message
  })
});

//set server on port 3000
app.listen(4000);
console.log("server on port 4000");
