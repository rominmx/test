import FieldService from '../services/operations/FieldService';
import { PENDING, SUCCESS, ERROR } from './constants';
import {
  ASSESSMENT_TITLES,
  CULTURE_VALUES,
  OPERATION_VALUES,
} from '../services/operations/constants';

async function getOperations({ commit }) {
  commit('setOperationsStatus', PENDING);

  try {
    const operations = await FieldService.getOperations();
    const mappedOperations = operations.map((operation) => {
      const type = {
        value: operation.type,
        title: OPERATION_VALUES.get(operation.type) || OPERATION_VALUES.get(null),
      };
      const culture = {
        value: operation.culture,
        title: CULTURE_VALUES.get(operation.culture) || CULTURE_VALUES.get(null),
      };
      const assessment = {
        value: operation.assessment,
        title: ASSESSMENT_TITLES.get(operation.assessment) || ASSESSMENT_TITLES.get(null),
      };

      return {
        ...operation,
        type,
        culture,
        assessment,
      };
    });

    commit('setOperations', mappedOperations);
    commit('setOperationsStatus', SUCCESS);
  } catch (e) {
    commit('setOperationsStatus', ERROR);
  }
}

export default {
  getOperations,
};
