import {SET_MOCK_DATA} from "../actions/index";
const initialState = { MOCK_DATA: [] }

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_MOCK_DATA:
    return {
      ...state,
      MOCK_DATA: action.payload
    }
  default:
    return state
  }
}

export default AppReducer;