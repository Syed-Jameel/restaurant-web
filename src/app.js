const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//public static path
const path = require('path')
const static_path = path.join(__dirname,'../public')
app.use(express.static(static_path))

//view engine to make pages dynamic
app.set('view engine', 'hbs')
const tamplate_path = path.join(__dirname,'../templates/views')
//because we have changed the default views folder
app.set('views',tamplate_path)

//partials
const hbs = require('hbs')
const partials_path = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partials_path)

//routing
app.get('/', (req, res)=>{
    res.render(`index`)
})

app.get('/special', (req, res)=>{
    res.render('Special')
})

app.get('/about', (req, res)=>{
    res.render('About')
})

app.get('/dishes', (req, res)=>{
    res.render('dishes')
})

app.get('/contact', (req, res)=>{
    res.render('contact')
})

app.get('*', (req, res)=>{
    res.render('404error',{ errorMsg : 'Oops ! Page Not Found'})
})

app.listen(port, ()=>{
    console.log(`server runnig at ${port}`);
})

