const User = require("../models/users");
const bcrypt = require('bcrypt');

const getUsers = async(req,res)=>{
    try {
        const datauser = await User.find({});
        res.status(200).json(datauser);
        // .then(result=>
        //     {res.send(result)});
    }catch (err){
            console.log(err);
    }
}

const getUser = async(req,res) => { 
    try{
        await User.findOne({_id:req.params.id}).then(result=>
            {res.send(result)});
    }catch (err){
            console.log(err);
    }
};

const createUser = async(req,res)=>{
    try{
        const salt = bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.mdp,salt)
        console.log(salt)
        console.log(hashedPassword)
      let new_user = new User({
          nom :req.body.nom,
          prenom :req.body.prenom,
          adresse :req.body.adresse,
          email :req.body.email,
          numero :req.body.numero,
          mdp :hashedPassword,
          role :req.body.role,
      });
      await new_user.save()
      res.send('sauvgarder effectué avec succes!');
      }  
      catch (err){
          console.log(err)
      }
  
  
  };



const deleteUser = async(req,res) => { 
    try{
        await User.findOneAndDelete({_id:req.params.id}) ;
        res.send("supprimé avec sucées");
    } catch (err){
        res.send(err);
    }
};

const updateUser =  async(req,res) =>{
    try{
        await User.findOneAndUpdate({
            _id:req.params.id},
            {
                email: req.body.email
        }
        ); 
        res.send("mise a jour avec sucées");
    } catch (err){
        res.send(err);
    }
};

module.exports = {
    createUser, 
    getUsers, 
    getUser, 
    updateUser, 
    deleteUser
}