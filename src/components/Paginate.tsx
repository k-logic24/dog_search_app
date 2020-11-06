import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { usePagination } from "../hooks/usePagination";

const Paginate: FC = () => {
  const [page, totalPage, paginateAction] = usePagination()

  return (
    <div className="mt-6 flex justify-center items-center">
      {page > 1 && (
        <button
          className="w-6 md:w-8 h-6 md:h-8 paginate-btn"
          type="button"
          onClick={(e) => paginateAction(e, 'prev')}
        >
          <FontAwesomeIcon icon={['fas', 'chevron-left']} />
        </button>
      )}
      <div className="tracking-wider inline-block mx-4">
        {page}/{totalPage}
      </div>
      {page < totalPage && (
        <button
          className="w-6 md:w-8 h-6 md:h-8 paginate-btn"
          type="button"
          onClick={(e) => paginateAction(e, 'next')}
        >
          <FontAwesomeIcon icon={['fas', 'chevron-right']} />
        </button>
      )}
    </div>
  )
}

export default Paginate
