const mongoose = require('mongoose');
const { uuid } = require('uuidv4');

const ProfessorSchema = mongoose.Schema({
    description: {
        type: String
    },
    professorId: { 
        type: String, 
        default: uuid 
    },
    professorName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Professor', ProfessorSchema);

