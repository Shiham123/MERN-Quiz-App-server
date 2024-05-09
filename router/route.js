const {Router} = require("express")
const router = Router()

/** imported controller */
const {getAllQuestion, postInsertQuestions, deleteAllQuestion} = require("../controller/question")

/** question route */
router.route("/questions").get(getAllQuestion).post(postInsertQuestions).delete(deleteAllQuestion)

module.exports = router
