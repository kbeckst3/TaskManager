const Task = require('../models/Task')
const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = async (req, res) => {
    const task = await Task.create
    res.json(req.body)
}

const getTask = (req, res) => {
    res.send('get task')
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
getAllTasks,
createTask,
getTask, 
updateTask, 
deleteTask
};