const baseUrl = 'https://dog.ceo/api'
export class InteractionApi {
  private variableUrl
  constructor(url: string) {
    this.variableUrl = url
  }

  fetchDogData() {
    return fetch(`${baseUrl + this.variableUrl}`)
      .then((res) => res.json())
      .then((data) => data.message)
      .catch((err) => {
        throw new Error(err)
      })
  }

  fetchDogBreeds() {
    return fetch(`${baseUrl + this.variableUrl}`)
      .then((res) => res.json())
      .then((data) => {
        let dataOfBreeds: string[] = []
        for (const [breed] of Object.entries(data.message)) {
          dataOfBreeds.push(breed)
        }
        return dataOfBreeds
      })
      .catch((err) => {
        throw new Error(err)
      })
  }
}
