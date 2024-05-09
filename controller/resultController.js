const getAllResult = (req, res) => {
	try {
		return res.status(200).json({message: "here we get all result"})
	} catch (error) {
		return res.status(400).json({message: error.message})
	}
}

module.exports = {getAllResult}
