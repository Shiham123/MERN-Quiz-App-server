const getAllQuestion = (req, res) => {
	try {
		return res.status(200).json({message: "hello all question"})
	} catch (error) {
		return res.status(400).json({message: error.message})
	}
}

module.exports = {getAllQuestion}
