const mongoose = require ("mongoose");
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    nom : {
        type :String,
        required:true,
    },
    prenom : {
        type :String,
        required:true,
    },
    adresse : {
        type :String,
        required:true,
    },
    email : {
        type :String,
        required:true,
    },
    numero : {
        type :Number,
        required:true,
    },
    mdp : {
        type :String,
        required:true,
    },
    role : {
        type :Number,
        required:true,
    }
    
});
const User = mongoose.model('user',userSchema)
module.exports = User