import TDate from './TDate';
import { PLANNED } from './constants';

export default class {
  constructor(args) {
    const {
      id = null,
      type,
      date,
      area,
      comment = null,
      assessment = null,
      culture = null,
      status = PLANNED,
    } = args;
    this.id = id;
    this.type = type;
    this.date = new TDate(date);
    this.area = area;
    this.comment = comment;
    this.assessment = assessment;
    this.culture = culture;
    this.status = status;
  }
}
