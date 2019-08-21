import axios from 'axios';

export default {
  getUser: function () {
    return axios.get("/api/user/info")
  },
  getUserId: function (userId) {
    return axios.get("/api/user/info/" + userId.id)
  },
  getObjectId: function (objectId) {
    return axios.get("/api/object/info/" + objectId)
  },
  updateUser: function (userId, obj) {
    return axios.put("/api/user/update/", {userId:userId, obj:obj})
  },
  getObject: function () {
    return axios.get("/api/object/info")
  },

}