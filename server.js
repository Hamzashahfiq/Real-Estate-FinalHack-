const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
require('dotenv').config()

const port = 5000
const app = express();

const AuthRouter  = require('./src/components/auth/AuthRoutes')
const AddProduct = require('./src/components/products/ProductsRoutes')
const setupDB = require('./src/config/db')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

setupDB()
// app.use('/', (res,req) =>{
//   res.status.send('Server Connected')
// })
app.use('/auth', AuthRouter)
app.use('/product', AddProduct)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})