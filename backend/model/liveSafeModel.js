/*Author: Pratik Shinde */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LiveSafeSchema = new Schema({

    id: {
        type: Number
    },

    url: {
        type: String
    },

    title: {
        type: String
    },

    user: {
        type: String
    }

});

module.exports = { LiveSafeSchema }
