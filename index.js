const app = require("./src/app/app")
const {portNumber} = require("./src/app/secret")
const {mongodbConnection} = require("./src/database/connection")

app.get("/", (req, res) => {
	res.status(200).json({message: "server is running"})
})

/* eslint-disable no-console */
mongodbConnection()
	.then(() => {
		try {
			app.listen(portNumber, () => {
				console.log(`server is connected to http://localhost:${portNumber}`)
			})
		} catch (error) {
			console.log(error)
		}
	})
	.catch((error) => {
		console.log("Cannot connect with the server", error)
	})
