import React, { FC, useReducer, useEffect } from 'react'

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Search from "./components/Search";
import List from "./components/List";
import Loading from "./components/Loading";
import Paginate from "./components/Paginate";
import { InteractionApi } from "./api";
import { reducer, DogContext, initialState } from "./store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronRight, faChevronLeft)

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    new InteractionApi('/breeds/image/random/50').fetchDogData()
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
