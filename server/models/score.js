const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/${process.env.dbName}`);
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var scoreSchema = new Schema({
    name: String,
    score: Number,
    createdAt: Date
});
var Score = mongoose.model('Score', scoreSchema);
module.exports = Score