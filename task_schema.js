var mongoose = require('mongoose');//importa la libreria mongoose

var TaskSchema = new mongoose.Schema({//constructor variable objeto asignamos una clase esquema
    TaskId: Number,
    Name: String,
    Deadline: Date,
});

module.exports = mongoose.model(
    'task', TaskSchema, 'Tasks');