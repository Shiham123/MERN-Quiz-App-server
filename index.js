const app = require("./src/app/app")
const {portNumber} = require("./src/app/secret")
const mongodbConnection = require("./src/database/connection")

app.get("/", (req, res) => {
	res.status(200).json({message: "server is running"})
})

app.listen(portNumber, async () => {
	/* eslint-disable-next-line no-console */
	console.log(`server is running at http://localhost:${portNumber}`)
	// here i am connect mongodb with mongoose
	await mongodbConnection()
})
