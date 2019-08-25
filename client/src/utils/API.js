import axios from 'axios';

export default {
  getUser: function () {
    return axios.get("/api/users/info")
  },
  getUserId: function (id) {
    console.log(id)
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