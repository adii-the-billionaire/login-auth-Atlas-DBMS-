const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')
    //Login Page
router.get('/login', (req, res) => {
    res.render('login')
})
router.get('/register', (req, res) => {
    res.render('register')
})

//register Handle

router.post('/register', (req, res) => {
    // console.log(req.body)
    // res.send('hello')
    const {
        name,
        email,
        password,
        password2
    } = req.body

    //define the error 
    let errors = []

    //Check requied fields

    if (!name || !password || !email || !password2) {
        errors.push({
            msg: 'Please fills in all detailed'
        })


        //Check passwords match

        if (password !== password2) {
            errors.push({
                msg: 'Passwords do not match'
            })
        }

        //check pass length 

        if (password.length < 8) {
            errors.push({
                msg: 'Password should be at least 6 character'
            })
        }
        if (errors.length > 0) {
            res.render('register', {
                errors,
                name,
                email,
                password,
                password2
            })
        } else {
            // res.send('pass')
            const newUser = new User({
                name,
                email,
                password
            })

            console.log(newUser)
                //validation Passed

            res.send('hello')
        }
    }
})
module.exports = router