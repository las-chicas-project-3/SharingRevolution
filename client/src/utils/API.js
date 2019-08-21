import axios from 'axios';

export default  {
  getUser: function() {
    return axios.get("/api/user/info")
  },
  updateUser: function(userId,result) {
    return axios.get("/api/user/update/"+ userId +"/"+ result)
  },
  getObject: function() {
    return axios.get("/api/object/info")
  }
}