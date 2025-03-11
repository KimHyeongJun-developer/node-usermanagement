const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/userInfo')
    .then(() => {
        console.log(
            'MONGO CONNECTION OPEN!')
    })
    .catch(err => {
        console.log('error caused!')
        console.log(err)
    }
    )
const User = require('./model/user.js')

const seedProducts = [
    {
        userName: 'kim hyeongjun',
        userAge: 25,
        userEmail: 'kkhhjj0628@gmail.com',
        userSex: 'man'

    },
    {
        userName: 'kasahara ayame',
        userAge: 23,
        userEmail: 'kasahara@gmail.com',
        userSex: 'woman'
    },
    {
        userName: 'lee seongmin',
        userAge: 27,
        userEmail: 'tmdal0615@gmail.com',
        userSex: 'man'
    },
    {
        userName: 'lily',
        userAge: 18,
        userEmail: 'lylychan@gmail.com',
        userSex: 'woman'
    },
    {
        userName: 'kim jihyeok',
        userAge: 24,
        userEmail: 'dnjsgy4850@gmail.com',
        userSex: 'man'
    }

]
User.insertMany(seedProducts)