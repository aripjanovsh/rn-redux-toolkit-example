import {BaseApi} from './BaseApi';

const responseData = {
  data: {
    hits: [
      {id: 1, name: 'Tim abrams', position: 'JS developer'},
      {id: 2, name: 'Andy Sanchez', position: 'PHP Developer'},
      {id: 3, name: 'Leanne Graham', position: 'QA'},
      {id: 4, name: 'Mr. Kirtis Weissnat', position: 'Manager'},
      {id: 5, name: 'Nicholas runolfs', position: 'Manager'},
      {id: 6, name: 'Tim abrams', position: 'JS developer'},
      {id: 7, name: 'Andy Sanchez', position: 'PHP Developer'},
      {id: 8, name: 'Leanne Graham', position: 'QA'},
      {id: 9, name: 'Mr. Kirtis Weissnat', position: 'Manager'},
      {id: 10, name: 'Nicholas runolfs', position: 'Manager'},
    ],
    filters: {
      teamlead: {
        label: 'Team lead',
        data: [{value: 'Any Teamlead'}, {value: 'Other Teamlead'}],
      },
      sort: {
        label: 'Sorting',
        data: [{value: 'ASC'}, {value: 'DESC'}],
      },
    },
  },
};

export class UsersApi extends BaseApi {
  search(params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.9) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(responseData);
        }
      }, 100);
    });
  }
}
