import { ADD_TODO } from 'Actions/actionTypes'

export const addTODO = () => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      item
    })
  }
}