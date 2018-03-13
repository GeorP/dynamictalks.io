import { config } from 'src/config/config';

export const PAGETYPES = {
  BEFORE: 'BEFORE',
  ONGOING: 'ONGOING',
  AFTER: 'AFTER'
};

export function definePageType() {
  const {eventInformation: {eventDate: {time}}} = config;
  const now = Date.now();
  // const now = new Date('2018-03-11T15:18');
  
  const eventStartDate = new Date(time).getTime();
  const finishedDate = (date => new Date(date.setDate(date.getDate() + 1)).getTime())(new Date(time));
  
  if ((now > eventStartDate) && (now < finishedDate)) {
    return PAGETYPES.ONGOING;
  } else if (now < eventStartDate) {
    return PAGETYPES.BEFORE;
  } else {
    return PAGETYPES.AFTER;
  }
}
