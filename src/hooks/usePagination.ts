import React, { useContext } from 'react'

import { DogContext } from '../store'

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
    dispatch({
      type: 'FETCH_DOG',
      payload: { page: type === 'prev' ? prevPage : nextPage }
    })
  }

  return [state.page, state.totalPage, handleClickPagenate] as const
}
