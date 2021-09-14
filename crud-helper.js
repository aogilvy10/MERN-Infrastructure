// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');


//to get user to load
//type node then .load crud-helper.js and this will create the new user for us
//testing out the models

async function main() {
  // const user = await User.create({
  //   name: 'Andrew',
  //   email: 'andrew@email.com',
  //   password: 'abc123'
  // }); 
  // console.log(user);

  //list all users
  const users = await User.find({});
  console.log(users);

  // process.exit();
}

main();