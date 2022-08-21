import { wait } from '../utils';

export default {
  getList(waitTime = 0) {
    const url = '/list.json'
    // const url = ''
    return fetch(url).then(res => res.json()).then(x => wait(waitTime, x));
  },
  getListXhr(waitTime = 0) {
    const url = '/list.json'

    const promisetify = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
          const list = JSON.parse(this.responseText);
          resolve(list);
        } else {
          reject({status: this.status, statusText: this.statusText})
        }
      }
      xhr.send();
    });

    return promisetify.then(x => wait(waitTime, x));
  },
}