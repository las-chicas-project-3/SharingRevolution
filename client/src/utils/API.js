import axios from 'axios';

export default  {
  getUser: function() {
    return axios.get("/api/user/info")
  },
  getObject: function() {
    return axios.get("/api/object/info")
  }
}