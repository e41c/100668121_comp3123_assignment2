const express = require('express');
const EmpModel = require('../models/EmpModels');

const routes = express.Router();

routes.post('/employees', async (req, res) => {
    try {
        const newEmp = new EmpModel({
            ...req.body
        });
        await newEmp.save();
        console.log("New Employee created:", newEmp);
        res.status(201).send(newEmp);
    } catch (error) {
        console.error("Error creating employee:", error);
        res.status(500).send(error.message || 'Internal Server Error');
    }
});

routes.get('/employees', async (req, res) => {
    try {
        const empList = await EmpModel.find({});
        console.log("All Employees:", empList);
        res.status(200).send(empList);
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).send(error.message || 'Internal Server Error');
    }
});

routes.get('/employees/:eid', async (req, res) => {
    try {
        const emp = await EmpModel.findById(req.params.eid);
        if (emp) {
            console.log("Employee found:", emp);
            res.status(200).send(emp);
        } else {
            console.log("No Employee found");
            res.status(404).send("No Employee found");
        }
    } catch (error) {
        console.error("Error fetching employee:", error);
        res.status(500).send(error.message || 'Internal Server Error');
    }
});

routes.put('/employees/:eid', async (req, res) => {
    try {
        const updatedEmp = await EmpModel.findByIdAndUpdate(req.params.eid, req.body, { new: true });
        console.log("Updated Employee Info:", updatedEmp);
        res.status(200).send(updatedEmp);
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).send(error.message || 'Internal Server Error');
    }
});

routes.delete('/employees/:eid', async (req, res) => {
    try {
        const dltEmp = await EmpModel.findByIdAndDelete(req.params.eid);
        if (!dltEmp) {
            console.log("Employee not found");
            res.status(404).send("Employee not found");
        } else {
            console.log("Employee Deleted:", dltEmp);
            res.status(200).send("Employee deleted: " + dltEmp);
        }
    } catch (error) {
        console.error("Error deleting employee:", error);
        res.status(500).send(error.message || 'Internal Server Error');
    }
});

module.exports = routes;
