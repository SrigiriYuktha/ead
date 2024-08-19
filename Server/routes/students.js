const express = require('express')
const router = express.Router()
const student = require('../models/student')


router.get('/', async(req,res) => 
{
    try
    {
           const students = await student.find()
           res.json(students)
    }
    catch(err)
    {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => 
{
    try
    {
           const temp = await student.findById(req.params.id)
           res.json(temp)
    }

catch(err)
{
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => 
{
    const temp = new student
   ({
        rollno:req.body.rollno,
        name: req.body.name,
        branch: req.body.branch,
        promoted:req.body.promoted,
        credits: req.body.credits

    })

    try
   {
        const a1 =  await temp.save() 
        res.json(a1)
    }
catch(err)
   {
        res.send('Error')
    }
})

router.patch('/',async(req,res)=> 
{
    try
   {
        const temp  = await student.findOne({name: req.body.name}) 
        temp.promoted = req.body.promoted
        const a1 = await temp.save()
        res.json(a1)  
    }
catch(err)
   {
        res.send('Error')
    }

})

router.delete('/:id', async(req,res) => 
    {
        try
        {
               const students = await student.deleteOne({id : req.params.id});
               res.json(students)
        }
        catch(err)
        {
            res.send('Error ' + err)
        }
    });
    

module.exports = router










