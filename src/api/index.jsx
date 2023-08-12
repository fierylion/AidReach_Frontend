import axios from 'axios'
const dev = false
const api = axios.create({
  baseURL: dev ? 'http://localhost:5000/' : 'https://aidreach.onrender.com',
})
export default api