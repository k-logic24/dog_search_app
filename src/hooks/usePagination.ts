import React, { useContext } from 'react'

import { DogContext } from '../App'

type PaginateAction = (
  event: React.MouseEvent<HTMLButtonElement>,
  type: string
) => void

export const usePagination = () => {
  const { state, dispatch } = useContext(DogContext)
  const prevPage = Math.max(state.page - 1, 1)
  const nextPage = Math.min(state.page + 1, state.totalPage)

  const handleClickPagenate: PaginateAction = async (event, type) => {
    event.preventDefault()
    await dispatch({ type: 'FETCH_DOG', payload: { loading: true } })
    dispatch({
      type: 'FETCH_DOG',
      payload: {
        page: type === 'prev' ? prevPage : nextPage,
        loading: false
      }
    })
  }

  return [ state.page, state.totalPage, handleClickPagenate ] as const
}
