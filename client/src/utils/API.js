import axios from 'axios';

export default {
  getUser: function () {
    return axios.get("/api/users/info")
  },
  getUserId: function (id) {
    return axios.get("/api/users/info/" + id)
  },
  getObjectId: function (objectId) {
    return axios.get("/api/object/info/" + objectId)
  },
  updateUser: function (info) {
    return axios.put("/api/users/update", info)
  },
  getObject: function () {
    return axios.get("/api/object/info")
  }
}