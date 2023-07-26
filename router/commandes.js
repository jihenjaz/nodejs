const express = require ("express");
const router =  express.Router();
const {     getCommandes, getCommande, updateCommande, deleteCommande, createCommande } = require("../controllers/commandes");


router.get('/commandes', getCommandes);

router.post('/commandes', createCommande);

router.get('/commandes/:id', getCommande);

router.delete('/commandes/:id', deleteCommande);

router.patch('/commandes/:id', updateCommande);
 

module.exports = router;