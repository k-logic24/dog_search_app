import React, { useContext, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DogContext } from '../App'

type PaginateAction = (
  event: React.MouseEvent<HTMLButtonElement>,
  type: string
) => void

const Paginate: FC = () => {
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

  return (
    <div className="mt-6 flex justify-center items-center">
      {state.page > 1 && (
        <button
          className="w-6 md:w-8 h-6 md:h-8 paginate-btn"
          type="button"
          onClick={(e) => handleClickPagenate(e, 'prev')}
        >
          <FontAwesomeIcon icon={['fas', 'chevron-left']} />
        </button>
      )}
      <div className="tracking-wider inline-block mx-4">
        {state.page}/{state.totalPage}
      </div>
      {state.page < state.totalPage && (
        <button
          className="w-6 md:w-8 h-6 md:h-8 paginate-btn"
          type="button"
          onClick={(e) => handleClickPagenate(e, 'next')}
        >
          <FontAwesomeIcon icon={['fas', 'chevron-right']} />
        </button>
      )}
    </div>
  )
}

export default Paginate
