const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:String,completed:Boolean
})

modeul.exports = mongoose.model('Task', TaskSchema);