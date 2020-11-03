import axios from 'axios'

const baseUrl = 'https://dog.ceo/api'
export const fetchDogs = (url: string) => {
  return new Promise((resolve) => {
    axios
      .get(`${baseUrl}${url}`)
      .then((res) => {
        resolve(res.data.message)
      })
      .catch((err) => {
        throw new Error(err)
      })
  })
}
