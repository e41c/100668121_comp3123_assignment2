const express = require('express')
const UserModel = require('../models/UserModels')

const routes = express.Router()

routes.post('/signup', async (req, res) => {
    try{
        const newUser = new UserModel({
            ...req.body
        })
        await newUser.save()
        console.log("New User created: " + newUser + "\n------------------------------------------------------------------------------------------------------------------")
        res.status(201).send(newUser)
    }catch(error){
        res.status(500).send(error)
    }
})

routes.post('/login', async (req, res) => {
    const {username, password} = req.query

    try{
        const user = await UserModel.findOne({ $or: [{ username: username }, { email: username }] })
        if(user){
            if(password == user.password){
                console.log("USER LOOGED IN: " + user)
                res.send({
                    username: username,
                    password: password
                })
            }else{
                res.send({
                    status: false,
                    message: 'Invalid Username and/or password'
                })
            }
        }else{
            res.send({
                status: false,
                message: 'Invalid Username and/or password'
            })
        }

    }catch(error){
        res.status(500).send(error)
    }
})

module.exports = routes