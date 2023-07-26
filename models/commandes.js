const mongoose = require ("mongoose");
const commandeSchema = mongoose.Schema({
    date : {
        type :Date,
        required:true,
    },
    prix : {
        type : Number,
        required:true,
    },
    service : {
        type :String,
        required:true,
    },
    modeledepayement : {
        type :String,
        required:true,
    }
    
});
const Commande = mongoose.model('commande',commandeSchema)
module.exports = Commande