const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/users");
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const userRoute = require("./router/users");
app.use('/api',userRoute );

const animalRoute = require("./router/animals");
app.use('/api',animalRoute );

const commandeRoute = require("./router/commandes");
app.use('/api',commandeRoute);

// const uri ="mongodb+srv://jazirijihen80:VOmtHBEG2bSHvwNB@anicarecluster.54a53yg.mongodb.net/anicaredb?retryWrites=true&w=majority"
const uri ="mongodb+srv://jazirijihen80:VOmtHBEG2bSHvwNB@anicarecluster.54a53yg.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
    try {
        await mongoose.connect(uri);
        console.log("connected to MongoDB ");
    }catch (error){
        console.error(error);
    }
}
connect();


app.listen(8000 , () => {
console.log('server is running at locallhost:8000');
});