import React, { FC, useReducer, createContext, useEffect } from 'react'

import './style/tailwind.output.css'
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Search from "./components/Search";
import List from "./components/List";
import Loading from "./components/Loading";
import Paginate from "./components/Paginate";
import { fetchDogs } from "./api";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronRight, faChevronLeft)


type State = {
  dogs: string[]
  loading: boolean
  page: number
  perPage: number
  totalPage: number
}

type Action = {
  type: 'FETCH_DOG'
  payload: any
}

const initialState: State = {
  dogs: [],
  loading: true,
  page: 1,
  perPage: 12,
  totalPage: 1
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
            loading: false,
            totalPage: Math.ceil(data.length / state.perPage)
          }
        })
      })
  }, [])

  return (
    <DogContext.Provider value={{ state, dispatch }}>
      <Header />
      <div className="container py-8">
        <Search />
        { state.loading
          ? <Loading />
          : (
            <>
              <List />
              <Paginate />
              </>
          )}
      </div>
      <Footer />
    </DogContext.Provider>
  )
}

export default App
