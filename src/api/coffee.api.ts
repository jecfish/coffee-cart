import { wait } from '../utils';

export default {
  getList(waitTime = 0) {
    const url = '/list.json'
    // const url = ''
    return fetch(url).then(res => res.json()).then(x => wait(waitTime, x));
  },
}