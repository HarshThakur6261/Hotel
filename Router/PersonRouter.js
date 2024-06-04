const express = require('express')
const router = express.Router();
const Person = require('./../model/Person')

router.get('/:worktype' , async (req , res) =>{
    try {
  
      const worktype = req.params.worktype;
    const data = await Person.find({work : worktype});
    res.status(200).json(data);
  
      
    } catch (error) {
      res.status(500).json({err : error});
    }
    
  })

  router.get('/' , async (req , res) =>{
    try {
      const data = await Person.find();
      console.log("Data fetched")
      res.status(200).json(data)
    } catch (error) {
      console.log("Internall error")
      res.status(500).json({err : error})
    }
})

router.post('/' , async (req , res) =>{
   
  try {
    const data =  req.body;
  // create a now document using mongoose model
  const newPerson = new Person(data);
   
  let response = await newPerson.save()
  console.log("Data saved")
  res.status(200).json(response)
  
  } catch (error) {
    console.log(error)
    res.status(500).json({err :"internall error"})
  }
  

})

router.put('/:id' ,async (req,res) =>{

  try {
    const person_id = req.params.id;
    const updated_data = req.body;
    let response = await Person.findByIdAndUpdate(person_id , updated_data , {
      new : true, // return the updated data
      runValidators : true,

    })
    if(!response){
      res.status(404).json({error : "person not found"})
    }
    res.status(200).json(response );

  } catch (error) {
    console.log(error)
    res.status(500).json({err :"internall error"})
  }


})

router.delete("/:id" , async (req , res) => {
  try {

    const personid = req.params.id;
  let response = await Person.findByIdAndDelete(personid )

  res.status(200).json(response );
    
  } catch (error) {
     console.log(error)
    res.status(500).json({err :"internall error"})
  }
  
  
})

module.exports = router;
