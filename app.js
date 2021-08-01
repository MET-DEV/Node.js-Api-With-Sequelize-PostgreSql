const express=require("express")

const exphbs=require("express-handlebars")
const bodyParser=require("body-parser")

const path=require("path")

const db=require('./config/database')


db.authenticate().then(()=>console.log('Database connected...')).catch(err=>console.log(err))

const app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.get('/',(req,res)=>res.send('Index'))

app.use('/users',require('./routes/users'))
app.use('/products',require('./routes/products'))
const PORT=process.env.PORT||5000

app.listen(PORT,console.log(`Server started on port ${PORT}`))