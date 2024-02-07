const asyncHandler = require('express-async-handler');
const Task = require('../models/tasksModel');

const getTasks = asyncHandler(async (req, res)=> {
    const tasks = await Task.find();
    res.status(200).json(tasks);
})

const createTasks = asyncHandler(async (req, res)=>{
    if (!req.body.description) {
        res.status(400);
        throw new Error('Please add a description.');
    }
    const task = await Task.create({
        description: req.body.description
    });
    res.status(201).json(task);
})

const updateTasks = asyncHandler(async (req, res)=>{
    const task = await Task.findById(req.params.id);
    if (!task) {
        req.status(400);
        throw new Error("The task doesn't exist");
    }
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true});
    res.status(200).json(updatedTask);
})

const deleteTasks = asyncHandler(async (req, res)=>{
    const task = await Task.findById(req.params.id);
    if (!task) {
        res.status(400);
        throw new Error("The task doesn't exist");
    }
    await Task.deleteOne(task)
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks
}