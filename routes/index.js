const express=require('express');
//console.log("router loaded");
const router=express.Router();
module.exports = router;

//home controller
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);


//profile controller
const profileController=require('../controllers/profile_controller');
router.get('/profile',profileController.profile);


//edit controller
const editController=require('../controllers/edit_controller');
router.get('/edit',editController.edit);

