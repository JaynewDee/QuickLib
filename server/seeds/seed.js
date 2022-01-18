const db = require('../config/connection');
const { User } = require('../models')

const userData = require('./userData.json')

db.once('open', async () => {
     await User.deleteMany({});

     const users = await User.insertMany(userData)

     console.log('|Database seeded with Users|');
     process.exit(0);
})