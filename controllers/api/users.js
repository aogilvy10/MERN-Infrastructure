const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  create,
  checkToken
}

function checkToken(req, res) {
  // req.user will always be there IF a valid token was sent 
  // in the fetch request
  console.log(req.user);
  res.json(req.exp)
}

// controller action
async function create (req, res) {
  try {
    const user = await User.create(req.body);
    //need a secret to sign the webtoken
    const token = createJWT(user)
    res.json(token)
    //yes we can send back a simple string
  } catch(err) {
    //client will check for a non-200
    // 400 = bad request
    res.status(400).json(err);
  }
}

// HELPER FUNCTIONS
function createJWT(user) {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }

  );
}