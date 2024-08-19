const express = require('express')
const mongoose = require('mongoose')
// const cors=require('cors')
const studentsRouter = require('./routes/students')


const url = 'mongodb://localhost:27017/'
const app = express()
mongoose.connect(url)
const con = mongoose.connection


con.on('open', () =>
{
console.log('connected...')
})
// app.use(cors())
app.use(express.json())

app.use('/students',studentsRouter)
app.listen(9000, () =>
{
console.log('Server started')
console.log('Server started')
})

