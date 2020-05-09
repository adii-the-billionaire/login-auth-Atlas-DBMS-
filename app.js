const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const app = express()

//DB CONFIG

const db = require('./config/keys').MongoURI

//connect to Mongo

mongoose.connect(db, {
    useNewUrlParser: true
}).then(() => {

    console.log('MongoDB connected')
}).catch((e) => {
    console.log(e)
})

//EJS is here

app.use(expressLayouts)
app.set('view engine', 'ejs')

//Bodyparser
app.use(express.urlencoded({
    extended: false
}))





//routes is here
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/user'))
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})