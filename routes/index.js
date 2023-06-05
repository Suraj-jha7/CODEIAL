const express=require('express');
//console.log("router loaded");
const router=express.Router();
module.exports = router;

//home controller
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
router.use('/user',require('./users'));

router.get('/contact',homeController.contact);

//for any further routes,acess from here
//router.use('/routerName',require('./routerfile'));


//profile controller
//  const profileController=require('../controllers/profile_controller');
//  router.get('/profile',profileController.profile);


//edit controller
const editController=require('../controllers/edit_controller');
router.get('/edit',editController.edit);

