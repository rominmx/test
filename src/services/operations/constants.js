// Operation types
export const PLOWING = 'PLOWING';
export const BOWLING = 'BOWLING';
export const FERTILIZATION = 'FERTILIZATION';
export const WATERING = 'WATERING';
export const RIGGING = 'RIGGING';
export const HARVESTING = 'HARVESTING';
export const OPERATION_TYPES = new Map([
  [PLOWING, 'PLOWING'],
  [BOWLING, 'BOWLING'],
  [FERTILIZATION, 'FERTILIZATION'],
  [WATERING, 'WATERING'],
  [RIGGING, 'RIGGING'],
  [HARVESTING, 'HARVESTING'],
]);

// Operation statuses
export const PLANNED = 'planned';
export const DONE = 'done';
export const OPERATION_STATUSES = new Map([
  [PLANNED, 'planned'],
  [DONE, 'done'],
]);

// Assessment types
export const EXCELLENT = 'EXCELLENT';
export const SATISFACTORILY = 'SATISFACTORILY';
export const BADLY = 'BADLY';
export const ASSESSMENT = new Map([
  [EXCELLENT, 'EXCELLENT'],
  [SATISFACTORILY, 'SATISFACTORILY'],
  [BADLY, 'BADLY'],
]);

// Culture types
export const WINTER_WHEAT = 'WINTER_WHEAT';
export const WHEAT = 'WHEAT';
export const CULTURES = new Map([
  [WINTER_WHEAT, 'WINTERWHEAT'],
  [WHEAT, 'WHEAT'],
]);

export const MOCK_TIMEOUT = 1000;
