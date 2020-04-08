import axios from 'axios'

export const baseURL=axios.defaults.baseURL;

// get 请求
export function getRequset(url, params) {
  let accessToken=wx.getStorage("accessToken");
  return new Promise((resolve, reject) => {
    axios.get(
      baseURL+url,
      {
        params:params,
        headers: {
          'accessToken': accessToken
        }
      }
    ).then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// post 请求
export function postRequset(url, params) {
  let accessToken=wx.getStorage("accessToken");
  return new Promise((resolve, reject) => {
    axios.post(
      baseURL+url,
      params,
      {
        headers: {
          'accessToken': accessToken,
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
      }
    ).then((res) => {
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

// put 请求
export function putRequset(url, params) {
  let accessToken=wx.getStorage("accessToken");
  return new Promise((resolve, reject) => {
    axios.put(
      baseURL+url,
      params,
      {
        headers: {
          'accessToken': accessToken,
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }
      }
    ).then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// delete 请求
export function deleteRequset(url, params) {
  let accessToken=wx.getStorage("accessToken");
  return new Promise((resolve, reject) => {
    axios.delete(
      baseURL+url,
      {
        data:params,
        headers: {
          'accessToken': accessToken
        }
      }
    ).then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}
