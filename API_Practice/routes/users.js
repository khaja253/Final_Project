import express from 'express';

import { createUser,getUsers,getUser,deleteUser,updateUser } from '../controllers/users.js';

const router = express.Router();
//with let we can change the user arrays which can be helpful in delete 
//or any such functions which was not possible with cons

//all routes in here are starting with /users.. if we put /users here it will be like /users/users
router.get('/',getUsers )
//we cannot check post request with browser as whnever we type anything in browser 
//it's only making a get request that is the reason we use postman to check 
//post or anyother request except get
router.post('/', createUser );

router.get('/:id', getUser );

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser )

export default router;
