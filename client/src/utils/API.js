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
  updateUser: function (res) {
    
    const user = res.user 
    const obj = res.obj

    return axios.put("/api/user/update/", { user, obj })
  },
  getObject: function () {
    return axios.get("/api/object/info")
  },
  registerUser: function (user) {
    return axios.post("/api/user/register", user).then(res => { return res.data })
      .catch(err => {
        console.log(err)
        throw err
      })
  },
  login: function (user) {
    return axios.post('/api/user/login', user, { withCredentials: true }).then(res => { return res.data }).catch(err => {
      console.log(err)
      throw err
    })
  },
  getCurrentUser: function () {
    return axios.get('/api/user/current').then(res => {
      return res.data
    }).catch(err => {
      console.log(err)
      throw err
    })
  }
}