import axios from 'axios'

const base = import.meta.env.VITE_API_BASE || 'http://127.0.0.1:8000'

export const api = axios.create({
  baseURL: `${base}/api`,
  headers: { 'Content-Type': 'application/json' }
})

