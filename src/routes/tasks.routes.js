const { Router } = require("express");
const pool = require("../db");
// import CRUD functions
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controller");

const router = Router();

router.get("/tasks", getAllTasks);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

router.get("/tasks/:id", getTask);

module.exports = router;
