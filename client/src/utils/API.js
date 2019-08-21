import axios from 'axios';

export default  {
  getUser: function() {
    return axios.get("/api/user/info")
  },
  updateUser: function(id,result) {
    return axios.get("/api/user/update/"+ id + result).then(results => results.data);
  },
  getObject: function() {
    return axios.get("/api/object/info")
  }
}