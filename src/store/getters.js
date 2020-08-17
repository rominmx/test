import { PENDING, ERROR } from './constants';

const operationsLoading = (state) => state.operationsStatus === PENDING;
const operationsError = (state) => state.operationsStatus === ERROR;
const filteredOperations = (state) => state.operations
  .filter((operation) => operation.status === state.filter);

const sortedOperations = (state, getters) => {
  const { orderBy, asc } = state.order;
  let results = [...getters.filteredOperations];

  switch (orderBy) {
    // Sort by dates
    case 'date':
      results = results.sort((a, b) => {
        const valueA = new Date(a.date.year, a.date.month - 1, a.date.day);
        const valueB = new Date(b.date.year, b.date.month - 1, b.date.day);

        return valueA - valueB;
      });
      break;
    // Sort strings
    case 'type':
    case 'assessment':
    case 'culture':
      results = results.sort((a, b) => {
        if (a[orderBy].title < b[orderBy].title) {
          return -1;
        }

        if (a[orderBy].title > b[orderBy].title) {
          return 1;
        }

        return 0;
      });
      break;
    default:
      break;
  }

  if (asc) {
    results = results.reverse();
  }

  return results;
};

export default {
  filteredOperations,
  operationsError,
  operationsLoading,
  sortedOperations,
};
