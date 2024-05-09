const {Router} = require("express")
const {getAllQuestion} = require("../controller/question")
const router = Router()

/** question route */
router.get("/questions", getAllQuestion)

module.exports = router
