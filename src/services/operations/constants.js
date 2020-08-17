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
export const OPERATION_VALUES = new Map([
  [PLOWING, 'Вспашка c оборотом пласта'],
  [BOWLING, 'Боронование зяби и паров'],
  [FERTILIZATION, 'Удобрение'],
  [WATERING, 'Полив'],
  [RIGGING, 'Протравливание семян'],
  [HARVESTING, 'Сбор урожая'],
  [null, 'Нет данных'],
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
export const ASSESSMENT_VALUES = new Map([
  [EXCELLENT, 'Отлично'],
  [SATISFACTORILY, 'Удовлетворительно'],
  [BADLY, 'Плохо'],
  [null, 'Нет оценки'],
]);

// Culture types
export const WINTER_WHEAT = 'WINTER_WHEAT';
export const WHEAT = 'WHEAT';
export const CULTURES = new Map([
  [WINTER_WHEAT, 'WINTER_WHEAT'],
  [WHEAT, 'WHEAT'],
]);
export const CULTURE_VALUES = new Map([
  [WINTER_WHEAT, 'Пшеница озимая'],
  [WHEAT, 'Пшеница'],
  [null, 'Данные отсутствуют'],
]);

export const MOCK_TIMEOUT = 1000;
