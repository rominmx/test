const setOperationsStatus = (state, status) => {
  state.operationsStatus = status;
};

const setOperations = (state, operations) => {
  state.operations = [...operations];
};

const setOrder = (state, { orderBy, asc }) => {
  state.order.orderBy = orderBy;
  state.order.asc = asc;
};

// Filter operations by status (PLANNED, DONE)
const setFilter = (state, filter) => {
  state.filter = filter;
};

export default {
  setFilter,
  setOperations,
  setOperationsStatus,
  setOrder,
};
