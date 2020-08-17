import FieldService from '../services/operations/FieldService';
import { PENDING, SUCCESS, ERROR } from './constants';

async function getOperations({ commit }) {
  commit('setOperationsStatus', PENDING);

  try {
    const operations = await FieldService.getOperations();

    commit('setOperations', operations);
    commit('setOperationsStatus', SUCCESS);
  } catch (e) {
    commit('setOperationsStatus', ERROR);
  }
}

export default {
  getOperations,
};
