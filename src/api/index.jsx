import axios from 'axios'
const dev = true
const api = axios.create({
  baseURL: dev ? 'http://localhost:5000/' : 'https://aidreach.onrender.com',
})
export default api