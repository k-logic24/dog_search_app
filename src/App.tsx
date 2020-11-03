import React, { FC, useReducer, createContext } from 'react'

import './style/tailwind.output.css'
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

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

const DogContext = createContext({} as {
  state: State
  dispatch: React.Dispatch<Action>
})

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DogContext.Provider value={{ state, dispatch }}>
      <Header />
      <Footer />
    </DogContext.Provider>
  )
}

export default App
