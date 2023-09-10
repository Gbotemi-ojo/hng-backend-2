const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema({
    name: { type: String, minLength: 1 },
});

module.exports = mongoose.model("user", user);