const {Router} = require("express")
const router = Router()

/** imported controller */
const {
	getAllQuestion,
	postInsertQuestions,
	deleteAllQuestion,
} = require("../controller/questionController")
const {getAllResult, postAllResult, deleteResult} = require("../controller/resultController")
const {postUserName, getUserName} = require("../controller/userController")

/** question route */
router.route("/questions").get(getAllQuestion).post(postInsertQuestions).delete(deleteAllQuestion)

/** Result router */
router.route("/result").get(getAllResult).post(postAllResult).delete(deleteResult)

router.route("/user").get(getUserName).post(postUserName)

module.exports = router
