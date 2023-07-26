const express = require ("express");
const router =  express.Router();
const { getUsers, createUser, getUser,  deleteUser, updateUser } = require("../controllers/users");


router.get('/users', getUsers);

router.post('/users', createUser);

router.get('/users/:id', getUser);

router.delete('/users/:id', deleteUser);

router.patch('/users/:id', updateUser);
 

module.exports = router;