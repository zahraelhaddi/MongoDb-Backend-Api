//API ROUTES for the app
import {Router} from 'express';
import * as controller from '../controllers/controller.js'
const router=Router();

//QUESTIONS route API//

//router.get('/questions',controller.getQuestions)
//router.post('/questions',controller.insertQuestions)
router.route('/questions')
  .get(controller.getQuestions)/** get request */
  .post(controller.insertQuestions)/** post request */
  .delete(controller.dropQuestions)/** delete request */

router.route('/results')
  .get(controller.getResults)
  .post(controller.storeResults)
  .delete(controller.deleteResults)

export default router;