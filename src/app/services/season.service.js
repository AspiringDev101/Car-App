import http from './http-common';

class SeasonService {
  getAll() {
    return http.get('/season/list');
  }
  getRowByID(rowID){
    return http.get(`/season/${rowID}`)
  }
  
  updateData(data) {
    console.log(data)
    return http.put('/season/edit',data);
  }
  insertData(data) {
    console.log(data)
    return http.post('/season/add',data);
  }
  
}

export default new SeasonService();
