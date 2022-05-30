const express = require('express')
const {connect, connection} = require('mongoose')
const method = require('method-override')
const Art = require('./models/Art')
const Cart = require('./models/Cart')
const app = express()
const PORT = process.env.PORT || 3000
require('dotenv').config()

// === Database Connection === //
connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connection.once('open', () => console.log('Connected to Mongo'))

// === Engine Setup === //
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// === Middleware === //
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
app.use(express.json())

// === Routes === //

// Index //
app.get('/arts', (req, res) => {
    Art.find({}, (err, allArts) => {
        res.render('Index', {arts: allArts})
    })
})

// New //
app.get('/arts/new', (req, res) => {
    res.render('New');
});

// Delete //
app.delete('/arts/:id', (req, res) => {
    Art.findByIdAndDelete(req.params.id, (err) => {
        if (!err){
            res.status(200).redirect('/arts')
        } else {
            res.status(400).json(err)
        }
    })
})

// Update //
app.put('/arts/:id', (req, res) => {
    Art.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedArt) => {
        if (!err) {
            res.status(200).redirect('/arts')
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/arts', (req, res) => {
    Art.create(req.body, (err, createdArt) => {
        if (!err) {
            res.status(200).redirect('/arts')
        } else {
            res.status(400).json(err)
        }
    })
})

// Edit 
app.get('/arts/:id/edit', (req, res) => {
    Art.findById(req.params.id, (err, foundArt) => {
        if (!err) {
            res.render('Edit', {art: foundArt})
        } else {
            res.status(400).json(err)
        }
    })
})

// Show
app.get('/arts/:id', (req, res) => {
    Art.findById(req.params.id, (err, foundArt) => {
       if (!err) {
            res.render('Show', {art: foundArt})
       } else {
            res.status(400).json(err)
       }
        
    }) 
})

// === About Us === //
app.get('/about/', (req, res) => {
    res.render('About');
})


// === Checkout === //
app.get('/arts/:id/checkout/', (req, res) => {
    res.render('Checkout')
})



// app.put('/arts/:id/cart', async (req, res) => {
//     const shopCart = await Cart.findById('62913301b18a385fec8fe1d9')
//     const item = await Art.findById(req.body.arts)
//     shopCart.arts.push(item)
//     console.log(item,'item')
//     console.log(shopCart.arts,'shop')
// })

// Cart.findByIdAndUpdate('62913301b18a385fec8fe1d9',{
//     arts:shopCart.arts
//     },{new:true},(err,updatedCart)=>{
//         res.redirect('/arts/cart')
//     })

// app.post('/arts/:id/cart',(req,res)=>{
//     Cart.create(req.body,(err,addToCart)=>{
//     res.redirect('/arts/cart')
//  })
// })

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})