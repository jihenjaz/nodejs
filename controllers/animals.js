const Animal = require("../models/animals");


const getAnimals = async(req,res)=>{
    try {
        const dataanimal = await Animal.find({});
        res.status(200).json(dataanimal);
        // .then(result=>
        //     {res.send(result)});
    }catch (err){
            console.log(err);
    }
}

const getAnimal = async(req,res) => { 
    try{
        await User.findOne({_id:req.params.id}).then(result=>
            {res.send(result)});
    }catch (err){
            console.log(err);
    }
};

const createAnimal = async(req,res)=>{
    try{
      let new_animal = new Animal({
          type :req.body.type,
          nom :req.body.nom,
          age :req.body.age,
      });
      await new_animal.save()
      res.send('sauvgarder effectué avec succes!');
      }  
      catch (err){
          console.log(err)
      }
  
  
  };



const deleteAnimal = async(req,res) => { 
    try{
        await Animal.findOneAndDelete({_id:req.params.id}) ;
        res.send("supprimé avec sucées");
    } catch (err){
        res.send(err);
    }
};

const updateAnimal =  async(req,res) =>{
    try{
        await Animal.findOneAndUpdate({
            _id:req.params.id},
            {
                nom: req.body.nom
        }
        ); 
        res.send("mise a jour avec sucées");
    } catch (err){
        res.send(err);
    }
};

module.exports = {
    getAnimals, 
    getAnimal, 
    updateAnimal, 
    deleteAnimal, 
    createAnimal
}