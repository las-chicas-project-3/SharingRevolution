import axios from 'axios';

export default  {
  getClient: function() {
    return axios.get("/api/clients")
  },
  getObject: function() {
    return axios.get("/api/objects")
  }
}