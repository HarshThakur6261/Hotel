const express = require('express')
const router = express.Router();
const Menu = require('./../model/MenuItem')

router.get('/' ,async (req , res) =>{
    try {
      const data = await Menu.find()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error);
    }
     
  })
  
  router.post("/" ,async (req , res) =>{
     try {
      const data = req.body;
      const MenuItem = new Menu(data)
      let response = await MenuItem.save()
        res.status(200).json(response)
     } catch (error) {
           res.status(500).json(error)
     }
  })

  module.exports = router;
  