require("dotenv").config()
const portNumber = process.env.PORT || 5000

const mongodbURL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster-one.varjcyv.mongodb.net/MernQuizApp`
const mongodbLocalUrl = `mongodb://localhost:27017/MernQuizApp`

module.exports = {portNumber, mongodbURL, mongodbLocalUrl}
