import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
// console.log(import.meta.VITE_APP_RAPID_API_KEY)
// const key = import.meta.env.VITE_RAPID_API_KEY
// console.log(key)
const options = {
  params: {
    maxResults: '50',
    regionCode: 'SD',
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  },
};


export const fetchApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)
  return data
}