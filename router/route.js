const {Router} = require("express")
const router = Router()

/** imported controller */
const {getAllQuestion, postInsertQuestions} = require("../controller/question")

/** question route */
router.get("/questions", getAllQuestion)
router.post("/questions", postInsertQuestions)

module.exports = router
