import axios from 'axios'

const baseUrl = 'https://dog.ceo/api'
export const fetchDogs = (url: string) => {
  return new Promise<string[]>((resolve) => {
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

export const fetchBreeds = (url: string) => {
  let dataOfBreeds: string[] = []
  return new Promise<string[]>((resolve, reject) => {
    axios
      .get(`${baseUrl}${url}`)
      .then((res) => {
        const data = res.data.message
        for (const [breed] of Object.entries(data)) {
          dataOfBreeds.push(breed)
        }
        resolve(dataOfBreeds)
      })
      .catch((err) => {
        throw new Error(err)
      })
  })
}
