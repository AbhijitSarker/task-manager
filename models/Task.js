const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [30, 'name can not be more than 30 characters'],
    },
    description: {
        type: String,
        required: [true, 'must provide Description'],
        trim: true,
        maxlength: [500, 'name can not be more than 500 characters'],
    },
    dueDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value && value > Date.now(); // Check if the due date is in the future
            },
            message: 'Due date must be in the future'
        }
    },
    completed: {
        type: Boolean,
        default: false,
    },

})

module.exports = mongoose.model('Task', TaskSchema)
