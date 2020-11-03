import React, { useContext, FC } from 'react'
import { DogContext } from "../App";

const List: FC = () => {
  const { state } = useContext(DogContext)

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-4 row-gap-6 col-gap-4">
      { state.dogs.map((dog) => (
        <li>
          <img src="https://source.unsplash.com/random" alt=""/>
        </li>
      ))}
    </ul>
  )
}

export default List
