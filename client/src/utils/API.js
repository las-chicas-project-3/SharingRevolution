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
    console.log("User ID: " + userId)
    console.log("User ID: " + userId)

    return axios.put("/api/user/update/", {userId, obj:obj})
  },
  getObject: function () {
    return axios.get("/api/object/info")
  },
  registerUser: function(user){
    return axios.post("/api/user/register", user).then(res => {return res.data})
    .catch(err=>{
      console.log(err)
      throw err
    })
  },
  login: function(user){
    return axios.post('/api/user/login', user, {withCredentials: true}).then(res=> {return res.data}).catch(err=>{
      console.log(err)
      throw err
    })
  },
  getCurrentUser: function(){
    return axios.get('/api/user/current').then(res=>{
      return res.data
    }).catch(err=>{
      console.log(err)
      throw err
    })
  }
}