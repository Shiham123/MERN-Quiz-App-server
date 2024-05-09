const {Router} = require("express")
const router = Router()

/** imported controller */
const {getAllQuestion, postInsertQuestions, deleteAllQuestion} = require("../controller/question")
const {getAllResult} = require("../controller/resultController")

/** question route */
router.route("/questions").get(getAllQuestion).post(postInsertQuestions).delete(deleteAllQuestion)

/** Result router */
router.route("/result").get(getAllResult)

module.exports = router
