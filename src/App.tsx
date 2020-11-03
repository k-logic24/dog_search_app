import React, { FC, useReducer, createContext, useEffect } from 'react'

import './style/tailwind.output.css'
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import List from "./components/List";
import { fetchDogs } from "./api";

type State = {
  dogs: string[]
  loading: boolean
}

type Action = {
  type: 'FETCH_DOG'
  payload: any
}

const initialState = {
  dogs: [],
  loading: false
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_DOG':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const DogContext = createContext({} as {
  state: State
  dispatch: React.Dispatch<Action>
})

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchDogs('/breeds/image/random/50')
      .then((data) => {
        dispatch({
          type: 'FETCH_DOG',
          payload: {
            dogs: data,
            loading: false
          }
        })
      })
  }, [])

  return (
    <DogContext.Provider value={{ state, dispatch }}>
      <Header />
      <div className="container py-4 md:py-8">
        <List />
      </div>
      <Footer />
    </DogContext.Provider>
  )
}

export default App
