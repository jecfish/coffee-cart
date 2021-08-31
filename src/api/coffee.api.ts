export default {
  getList() {
    const url = '/list.json'
    // const url = ''
    return fetch(url).then(res => res.json())
  },
}