require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
var bcrypt = require('bcryptjs')
const session = require('express-session')
const cors= require('cors')
const ctrl = require('./controller')
const checkUserSession = require('./middleware/checkUserSession')

 

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(checkUserSession)

app.use(async (req, res, next) => {
    console.log(process.env.NODE_ENV , req.session.username)
    // const id = req.session.user.customer_id
    if (process.env.NODE_ENV === 'development' && !req.session.username ) {
        const db = req.app.get('db')
        let user = await db.session_user(34);
        req.session.user = user[0]
        console.log('middleware', req.session.user)


    }
    next();

})

const {
    SERVER_PORT,
    CONNECTION_STRING
}= process.env




app.get('/api/properties', async (req,res)=>{
    const db = req.app.get('db')
    console.log('get properties', req.session)
    const id = req.session.user.customer_id
    const properties = await db.get_houses([id])
    res.status(200).send(properties)

}) 
app.get('/auth/logout', (req, res) => {
    // console.log("before", req.session)
    req.session.destroy();
    // console.log(req.session)
    res.redirect('http://localhost:3000/#/')
})

// app.post('/api/properties', {})
app.delete('/api/properties/:id', async (req,res)=>{
    try{
   const {id}= req.params
   const db= req.app.get('db')
   let properties = await db.delete_house([id])
//    console.log(properties)
   res.status(200).send(properties)
    }catch(err){console.log(err)}
}) 

app.post('/api/login', ctrl.loginUser)

//  async (req,res)=>{
    // const {username, password}= req.body
    // console.log(username, password)
    // const db = req.app.get('db')
    // let user = await db.users_table([username, password])
    // req.session.user=user
    // res.status(200).send(user)

    app.post('api/register', ctrl.registerUser)


app.post('/api/auth/register', async (req,res)=>{
    const id = req.session.user.customer_id
    const {propertyName, propertyDescription, address, city, state, zip, image, loanAmount, monthlyMortgage, desiredRent, recommendedRent} = req.body;
    const db = req.app.get('db')
    let properties = await db.create_house([propertyName, propertyDescription, address, city, state, zip, image, loanAmount, monthlyMortgage, desiredRent,recommendedRent, id]);
    // console.log(properties)
    res.status(200).send(properties)
}) 
// app.post('/api/auth/logout')

massive(CONNECTION_STRING).then(db=>{
app.set('db', db)
console.log('db Connected')

app.listen(SERVER_PORT, ()=> console.log(`you have hit port ${SERVER_PORT}`))
})