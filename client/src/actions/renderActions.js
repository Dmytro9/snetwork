import {
  ADD_ONE,
} from './types'


export const addOne = id => ({
  type: ADD_ONE,
  payload: id
})