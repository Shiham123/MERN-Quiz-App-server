const app = require("./app/app")
const {portNumber} = require("./app/secret")

app.get("/", (req, res) => {
	res.status(200).json({message: "server is running"})
})

app.listen(portNumber, () => {
	// eslint-disable-next-line no-console
	console.log(`server is running at http://localhost:${portNumber}`)
})
