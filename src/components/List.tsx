import React, { useContext, FC } from 'react'
import { DogContext } from '../App'

const List: FC = () => {
  const { state } = useContext(DogContext)

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4">
      {state.dogs.map((url) => (
        <li key={url}>
          <img className="w-full" src={url} alt="" />
        </li>
      ))}
    </ul>
  )
}

export default List
