import React, { FC, useContext, useState, useEffect } from 'react'

import { InteractionApi } from '../api'
import { DogContext } from '../store'

const Search: FC = () => {
  const { state, dispatch } = useContext(DogContext)
  const [breeds, setBreeds] = useState<string[]>([])

  useEffect(() => {
    new InteractionApi('/breeds/list/all')
      .fetchDogBreeds()
      .then((breeds) => setBreeds(breeds))
  }, [setBreeds])

  const handleChangeBreed = async (event: React.ChangeEvent) => {
    await dispatch({ type: 'FETCH_DOG', payload: { loading: true } })

    const selectedValue =
      event.target instanceof HTMLSelectElement && event.target.value
    const url = selectedValue
      ? `/breed/${selectedValue}/images/random/50`
      : `/breeds/image/random/50`
    new InteractionApi(url).fetchDogData().then((data) => {
      dispatch({
        type: 'FETCH_DOG',
        payload: {
          dogs: data,
          loading: false,
          page: 1,
          totalPage: Math.ceil(data.length / state.perPage)
        }
      })
    })
  }

  return (
    <div className="mb-6 text-center">
      <select
        className="border rounded-sm px-2 py-1"
        defaultValue=""
        onChange={handleChangeBreed}
      >
        <option value="">random</option>
        {breeds.map((breed) => (
          <option value={breed} key={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Search
