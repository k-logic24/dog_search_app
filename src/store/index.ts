import React, { createContext } from 'react'

type State = {
  dogs: string[]
  loading: boolean
  page: number
  perPage: number
  totalPage: number
}

type Action = {
  type: 'FETCH_DOG'
  payload: Partial<typeof initialState>
}

export const initialState: State = {
  dogs: [],
  loading: true,
  page: 1,
  perPage: 12,
  totalPage: 1
}

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_DOG':
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export const DogContext = createContext(
  {} as {
    state: State
    dispatch: React.Dispatch<Action>
  }
)
