const express = require ("express");
const router =  express.Router();
const { getAnimals, createAnimal, getAnimal,  deleteAnimal, updateAnimal } = require("../controllers/animals");


router.get('/animals', getAnimals);

router.post('/animals', createAnimal);

router.get('/animals/:id', getAnimal);

router.delete('/animals/:id', deleteAnimal);

router.patch('/animals/:id', updateAnimal);
 

module.exports = router;