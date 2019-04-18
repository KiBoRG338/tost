const ADD_TODO = 'ADD_TODO'

const initialState = {
  TODO: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return state;
        // TODO: [
        //   ...state.TODO,
        //   action.TODO
        // ]
      

    default:
      return state
  }
}