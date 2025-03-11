const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
const User = require('./model/user.js');
const methodOverride = require('method-override')
mongoose.connect('mongodb://127.0.0.1:27017/userInfo')
    .then(() => {
        console.log(
            'MONGO CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('error caused!')
        console.log(err)
    })

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/users', async (req, res) => {
    const users = await User.find({})
    res.render('home.ejs', { users })
})
app.get('/users/add', (req, res) => {
    res.render('add.ejs')
})
app.post('/users', async (req, res) => {
    const newUser = new User(req.body)
    await newUser.save()
    console.log(newUser)
    res.redirect('/users')
})
app.get('/users/:id', async (req, res) => {
    const { id } = req.params
    const userDetail = await User.findById(id)
    res.render('detail.ejs', { userDetail })
})
app.get('/users/:id/edit', async (req, res) => {
    const { id } = req.params
    const updateUser = await User.findById(id)
    res.render('update.ejs', { updateUser })
})
app.put('/users/:id', async (req, res) => {
    const { id } = req.params
    const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true, runValidator: true })
    res.redirect(`/users/${updateUser._id}`)
})
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    const deleteUser = await User.findByIdAndDelete(id)
    res.redirect('/users')

})


app.listen(3030, () => console.log('Listening on port 3030!'))
