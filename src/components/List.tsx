import React, { useContext, useEffect, useState, FC } from 'react'
import { DogContext } from '../App'

const List: FC = () => {
  const { state } = useContext(DogContext)
  const [perData, setPerData] = useState<string[]>([])

  useEffect(() => {
    const filterData = state.dogs.slice(
      (state.page - 1) * state.perPage,
      state.page * state.perPage
    )
    setPerData(filterData)
  }, [state.page])

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
      {perData &&
        perData.map((url) => (
          <li key={url}>
            <img className="w-full" src={url} alt="" />
          </li>
        ))}
    </ul>
  )
}

export default List
