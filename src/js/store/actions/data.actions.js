import { dataConstants } from './../constants/data.constants'
import * as apiMoney from '../../api/money'
import * as apiExercise from '../../api/exercise'
import * as apiPlans from '../../api/plans'
import * as apiPriorities from '../../api/priorities'
import * as apiNote from '../../api/note'
import * as apiUser from '../../api/users'

const update = (collection, data, id = '') => {
  return dispatch => {
    dispatch({ type: dataConstants.DATA_UPDATE_REQUEST })
    switch (collection) {
      case 'money':
        apiMoney.createMoney(id, data)
        break
      case 'exercise':
        apiExercise.createExercise(id, data)
        break
      case 'plans':
        apiPlans.createPlans(id, data)
        break
      case 'priorities':
        apiPriorities.createPriorities(id, data)
        break
      case 'note':
        apiNote.createNote(id, data)
        break
      case 'users':
        apiUser
          .updateUserProfile(data)
          .then(() => dispatch({ type: dataConstants.DATA_UPDATE_SUCCESS }))
          .catch(() => dispatch({ type: dataConstants.DATA_UPDATE_FAILURE }))
        break

      default:
        break
    }
  }
}
export const dataActions = {
  update
}
