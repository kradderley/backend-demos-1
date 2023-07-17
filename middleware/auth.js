const apiKey = "abcd1234"

const auth = (req, res, next) => {
    console.log(new Date(), req.path);
    next();
  }

  module.exports = auth; 