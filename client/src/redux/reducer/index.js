import {SET_MOCK_DATA, ADD_TODO, DELETE_TODO, UPDATE_TODO} from "../actions/index";
const initialState = { MOCK_DATA: [] }

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_MOCK_DATA:
    return {
      ...state,
      MOCK_DATA: action.payload
    }
  case ADD_TODO: {
    const maxId = state.MOCK_DATA.reduce((max, todo) => Math.max(max, todo.id), 0);
    action.payload.id = maxId + 1;
    return {
      ...state,
      MOCK_DATA: [...state.MOCK_DATA, action.payload]
    }
  }
  case DELETE_TODO:
    return {
      ...state,
      MOCK_DATA: state.MOCK_DATA.filter(todo => todo.id !== action.payload)
    }
  case UPDATE_TODO:
    return {
      ...state,
      MOCK_DATA: state.MOCK_DATA.map(todo => todo.id === action.payload.id ? action.payload : todo)
    }
  default:
    return state
  }
}

export default AppReducer;
