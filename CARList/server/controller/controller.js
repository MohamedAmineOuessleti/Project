const Car =require('../../database/mongodb/index')

module.exports={
    getHandler:async (req,res)=>{
    
     try {
        const cars = await Car.find({})
        res.status(200).send(cars)
     } catch (error) {
        throw error
     }
    },
    postHandler: async  (req,res)=>{
          
     try {
        const cars = await Car.create(req.body)
        res.status(201).send(cars)
     } catch (error) {
        throw error
     }
    },
    updateHandler: async  (req,res)=>{
          
        try {
           const cars = await Car.updateOne({_id:req.params.id},req.body)
           res.status(202).send(cars)
        } catch (error) {
           throw error
        }
       },
       deleteHandler: async  (req,res)=>{
          
        try {
           const cars = await Car.deleteOne({_id:req.params.id})
           res.status(204).send(cars)
        } catch (error) {
           throw error
        }
       }


}