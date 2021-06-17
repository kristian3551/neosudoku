const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Object } = Schema.Types;

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: String,
    profilePictureURL: String,
    currentSudoku: {
        type: Object
    },
    solvedSudokus: [{type: Object }],
    ratingsByType: {
        type: Object,
        default: {
            'classical': 1500,
            'irregular (6x6)': 1500,
            'irregular (8x8)': 1500,
            'killer': 1500
        }
    } 

});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model('User', userSchema);