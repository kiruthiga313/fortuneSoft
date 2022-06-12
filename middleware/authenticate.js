const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (token === 'FSMovies2021') {
      next()
    }
    else {
      res.json({
        message: 'Authentication Failed!'
      })
    }
  }
  catch (error) {
    res.json({
      message: 'Authentication Failed!'
    })
  }
}

module.exports = authenticate