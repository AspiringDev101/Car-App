import http from './http-common';

class SeasonService {
  getAll() {
    return http.get('/season');
  }
  
  insertData(data) {
    console.log(data)
    return http.post('/seasonAdd',data);
  }
  
}

export default new SeasonService();
