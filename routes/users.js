const express=require('express');

const router=express.Router();

const userController=require('../controllers/users_controller');
router.get('/profile',userController.Profile);

router.get('/like',userController.like);


const postController=require('../controllers/post_controller');
router.get('/post',postController.post);




module.exports=router;