import axios from 'axios';

export function apiSIGA() {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SIGA_BASE_URL
  })
  return api;
}