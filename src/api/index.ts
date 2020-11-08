import axios from 'axios'

const baseUrl = 'https://dog.ceo/api'
export class InteractionApi {
  private variableUrl
  constructor(url: string) {
    this.variableUrl = url
  }

  fetchDogData() {
    return axios
      .get(`${baseUrl + this.variableUrl}`)
      .then((res) => res.data.message)
      .catch((err) => {
        throw new Error(err)
      })
  }

  fetchDogBreeds() {
    return axios
      .get(`${baseUrl + this.variableUrl}`)
      .then((res) => {
        let dataOfBreeds: string[] = []
        const data = res.data.message
        for (const [breed] of Object.entries(data)) {
          dataOfBreeds.push(breed)
        }
        return dataOfBreeds
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
}
