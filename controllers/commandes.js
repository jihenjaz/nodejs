const Commande = require("../models/commandes");


const getCommandes = async(req,res)=>{
    try {
        const datacommande = await Commande.find({});
        res.status(200).json(datacommande);
        // .then(result=>
        //     {res.send(result)});
    }catch (err){
            console.log(err);
    }
}

const getCommande = async(req,res) => { 
    try{
        await Commande.findOne({_id:req.params.id}).then(result=>
            {res.send(result)});
    }catch (err){
            console.log(err);
    }
};

const createCommande = async(req,res)=>{
    try{
      let new_commande = new Commande({
          date :req.body.date,
          prix :req.body.prix,
          service :req.body.service,
          modeledepayement :req.body.modeledepayement,
      });
      await new_commande.save()
      res.send('sauvgarder effectué avec succes!');
      }  
      catch (err){
          console.log(err)
      }
  
  
  };



const deleteCommande = async(req,res) => { 
    try{
        await Commande.findOneAndDelete({_id:req.params.id}) ;
        res.send("supprimé avec sucées");
    } catch (err){
        res.send(err);
    }
};

const updateCommande =  async(req,res) =>{
    try{
        await Commande.findOneAndUpdate({
            _id:req.params.id},
            {
                service: req.body.service
        }
        ); 
        res.send("mise a jour avec sucées");
    } catch (err){
        res.send(err);
    }
};

module.exports = {
    getCommandes, 
    getCommande, 
    updateCommande, 
    deleteCommande, 
    createCommande
}