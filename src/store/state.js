import { STABLE } from './constants';
import { PLANNED } from '../services/operations/constants';

export default {
  fieldId: 112,
  operations: [],
  operationsStatus: STABLE,
  filter: PLANNED,
  order: {
    orderBy: 'date',
    asc: false,
  },
};
