const getTasks = (req, res)=>{
    res.status(200).json({message: 'Get tasks'})
}
const createTasks = (req, res)=>{
    res.status(201).json({message: 'Create tasks'})
}
const updateTasks = (req, res)=>{
    res.status(200).json({message: `Modify the task with id ${req.params.id}`})
}
const deleteTasks = (req, res)=>{
    res.status(200).json({message: `Task deleted ${req.params.id}`})
}
module.exports = {
    getTasks,
    createTasks,
    updateTasks,
    deleteTasks
}