const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Array } = Schema.Types;

const sudokuSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    matrix: {
        type: Array,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: {
            values: ['classical', 'irregular (6x6)', 'irregular (8x8)'],
            message: '{VALUE} is not supported'
        },
        required: true
    },
    difficulty: {
        type: String,
        enum: {
            values: ['easy', 'medium', 'hard', 'expert'],
            message: '{VALUE} is not supported'
        },
        required: true
    }
});

module.exports = new Model('Sudoku', sudokuSchema);