const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const cookies = require('cookie-parser')

const mongoDB = require('./mongoose.js')
const auth = require('./routers/auth.router.js')
const movies = require('./routers/movies.router.js')
const theater = require('./routers/theaters.router.js')

dotenv.config()

const app = express()
mongoDB.connection()
app.use(express.json())

app.use(cookies())
app.use(cors({
    origin : 'http://localhost:5173',
    credentials:true
}))

app.use('/api/auth', auth)
app.use('/explore', movies)
app.use('/theater', theater)


app.listen(8000, () =>{
    console.log('Server: UP')
})