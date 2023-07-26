const mongoose = require ("mongoose");
const animalSchema = mongoose.Schema({
    type : {
        type :String,
        required:true,
    },
    nom : {
        type :String,
        required:true,
    },
    age : {
        type :Number,
        required:true,
    }
    
});
const Animal = mongoose.model('animal',animalSchema)
module.exports = Animal