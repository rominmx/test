import Operation from './Operation';
import {
  OPERATION_TYPES,
  PLOWING,
  BOWLING,
  FERTILIZATION,
  WATERING,
  RIGGING,
  HARVESTING,
  ASSESSMENT,
  EXCELLENT,
  SATISFACTORILY,
  BADLY,
  WINTER_WHEAT,
  WHEAT,
  CULTURES,
  MOCK_TIMEOUT,
  DONE,
  OPERATION_STATUSES,
} from './constants';

class FieldService {
  constructor() {
    this.operations = [
      new Operation({
        id: 'f112-o0',
        type: OPERATION_TYPES.get(PLOWING),
        date: { year: 2018, month: 3, day: 12 },
        area: 48.2,
        comment: 'Отлично вспахали',
        assessment: ASSESSMENT.get(EXCELLENT),
        culture: CULTURES.get(WINTER_WHEAT),
      }),
      new Operation({
        id: 'f112-o1',
        type: OPERATION_TYPES.get(FERTILIZATION),
        date: { year: 2018, month: 3, day: 14 },
        area: 47.8,
        comment: 'Все прошло нормально',
        assessment: ASSESSMENT.get(SATISFACTORILY),
        culture: CULTURES.get(WINTER_WHEAT),
      }),
      new Operation({
        id: 'f112-o2',
        type: OPERATION_TYPES.get(RIGGING),
        date: { year: 2018, month: 3, day: 17 },
        area: 47.5,
        comment: null,
        assessment: ASSESSMENT.get(BADLY),
        culture: CULTURES.get(WINTER_WHEAT),
      }),
      new Operation({
        id: 'f112-o3',
        type: OPERATION_TYPES.get(BOWLING),
        date: { year: 2018, month: 3, day: 26 },
        area: 48.2,
        comment: null,
        assessment: null,
        culture: CULTURES.get(WINTER_WHEAT),
      }),
      new Operation({
        id: 'f112-o4',
        type: OPERATION_TYPES.get(WATERING),
        date: { year: 2018, month: 4, day: 2 },
        area: 48.1,
        comment: 'Знатно полили',
        assessment: ASSESSMENT.get(EXCELLENT),
        culture: CULTURES.get(WHEAT),
        status: OPERATION_STATUSES.get(DONE),
      }),
      new Operation({
        id: 'f112-o5',
        type: OPERATION_TYPES.get(HARVESTING),
        date: { year: 2018, month: 6, day: 20 },
        area: 48.0,
        comment: null,
        assessment: null,
        status: OPERATION_STATUSES.get(DONE),
      }),
    ];
  }

  /**
   * Имитирует получение истории операций по тестовому полю 112
   * @returns {Promise<Array<Operation>>}
   */
  getOperations() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const clonedOperations = this.operations.map((operation) => operation);

        resolve(clonedOperations);
      }, MOCK_TIMEOUT);
    });
  }
}

export default new FieldService();
