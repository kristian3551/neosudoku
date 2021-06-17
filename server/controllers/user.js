const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');
const jwt = require('../utils/jwt');

module.exports = {
    get: (req, res, next) => {
        models.User.find().populate('currentSudoku')
            .then((users) => res.send(users))
            .catch(next)
    },
    getUserCurrentSudoku: (req, res, next) => {
        const id = req.params.id;
        models.User.find({ _id: id }).populate('currentSudoku')
            .then((user) => res.send(user))
            .catch(next)
    },
    post: {
        register: (req, res, next) => {
            const { username, password, firstName, lastName } = req.body;
            const user = new models.User({ username, password, firstName, lastName });
            user.save().then((createdUser) => {
                    const token = utils.jwt.createToken({ id: createdUser._id });
                    res.header('Authorization', token).send(createdUser);
            })
            .catch(next);
        },
        verifyUser: (req, res) => {
            const { token } = req.body;
    
            Promise.all([
                jwt.verifyToken(token),
                models.TokenBlacklist.findOne({ token })
            ])
                .then(([data, blacklistToken]) => {
                    if (blacklistToken) { return Promise.reject(new Error('blacklisted token')) }
    
                    models.User.findById(data.id)
                        .then((user) => {
                            return res.send(user);
                        })
                        .catch(err => console.log(err));
                });
        },
        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => Promise.all([user, user.matchPassword(password)]))
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.header('Authorization', token)
                    .cookie(config.authCookieName, token)
                    .send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[config.authCookieName];
            console.log('-'.repeat(100));
            console.log(token);
            console.log('-'.repeat(100));
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    put: {
        editCredentials: (req, res, next) => {
            const id = req.params.id;
            const { username, password } = req.body;
            let newCredentials = {};
            if(username) newCredentials.username = username;
            if(password) newCredentials.password = password;
            models.User.update({ _id: id }, newCredentials)
                .then((updatedUser) => res.send(updatedUser))
                .catch(next)
        },
        addBirthDate: (req, res, next) => {
            const id = req.params.id;
            const { birthDate } = req.body;
            models.User.updateOne({_id: id}, { birthDate })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next);
        },
        addProfilePictureURL: (req, res, next) => {
            const id = req.params.id;
            const { profilePictureURL } = req.body;
            models.User.updateOne({_id: id}, { profilePictureURL })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next);
        },
        setCurrentSudoku: (req, res, next) => {
            const id = req.params.id;
            const { currentSudoku } = req.body;
            models.User.updateOne({ _id: id }, { currentSudoku })
                .then((updatedUser) => res.send(updatedUser))
                .catch(next);
        },
        addSudokuToSolved: (req, res, next) => {
            const id = req.params.id;
            const { date, difficulty, type, ratingPoints } = req.body;
            models.User.updateOne({ _id: id}, 
                { $push: { solvedSudokus: { date, difficulty, type, ratingPoints } }})
                .then((updatedUser) => res.send(updatedUser))
                .catch(next);
        },
        setRating: (req, res, next) => {
            const id = req.params.id;
            const { type, ratingPoints } = req.body;
            models.User.findOne({ _id: id })
                .then((user) => {
                    const ratingObject = user.ratingsByType;
                    ratingObject[type] = ratingPoints;
                    return Promise.all([
                        models.User.updateOne({ _id: id }, { ratingsByType: ratingObject })
                    ])
                })
                .then(([updatedUser]) => res.send(updatedUser))
                .catch(next);
        }
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};