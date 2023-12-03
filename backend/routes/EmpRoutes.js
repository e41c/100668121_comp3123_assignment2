const express = require('express')
const EmpModel = require('../models/EmpModels')

const routes = express.Router()

routes.post('/employees', async (req, res) => {
    try{
        const newEmp = new EmpModel({
            ...req.body
        })
        await newEmp.save()
        console.log("New Employee created: " + newEmp + "\n------------------------------------------------------------------------------------------------------------------")
        res.status(201).send(newEmp)
    }catch(error){
        res.status(500).send(error)
    }
})


routes.get('/employees', async (req, res) => {
    try{
        const empList = await EmpModel.find({})
        console.log("ALL EMPLOYEES: \n" + empList)
        res.status(200).send(empList)
    }catch(error){
        res.status(500).send(error)
    }
})


routes.get('/employees/:eid', async (req, res) => {
    try{
        const emp = await EmpModel.findById(req.params.eid)
        if(emp){
            console.log("Employee found: " + emp)
            res.status(200).send(emp)

        }else{
            console.log("No Employee found")
            res.status(404).send("No Employee found")
        }

    }catch(error){
        res.status(500).send(error)
    }
})


routes.put('/employees/:eid', async (req, res) => {
    try{
        const updatedEmp = await EmpModel.findByIdAndUpdate(req.params.eid, req.body, { new: true })
        console.log("UPDATED EMPLOYEE INFO: \n" + updatedEmp)
        res.status(200).send(updatedEmp)
    }catch(error){
        res.status(500).send(error)
    }
})


routes.delete('/employees', async (req, res) => {
    const {eid} = req.query
    try{
        const dltEmp = await EmpModel.findByIdAndDelete(eid)
        if(!dltEmp){
            console.log("Employee not found")
            res.status(404).send("Employee not found")
        }else{
            console.log("Employee Deleted: " + dltEmp)
            res.status(200).send("Employee deleted: " + dltEmp)
        }
    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = routes