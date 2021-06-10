const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Array } = Schema.Types;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
        // TODO: Add validation regex
    },
    content: {
        type: Array,
        default: []
    }
});

module.exports = new Model('Article', articleSchema);