import {SET_MOCK_DATA, ADD_TODO, DELETE_TODO, UPDATE_TODO} from "../actions/index";
import {getStorage, setStorage} from "../../../Utils/storageUtils";
const initialState = { MOCK_DATA: getStorage("mockData") || [] }

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
    const newData = [...state.MOCK_DATA, action.payload];
    setStorage("mockData", newData);
    return {
      ...state,
      MOCK_DATA: newData
    }
  }
  case DELETE_TODO: {
    const newData = state.MOCK_DATA.filter(todo => todo.id !== action.payload);
    setStorage("mockData", newData);
    return {
      ...state,
      MOCK_DATA: newData
    }
  }
  case UPDATE_TODO: {
    const newData = state.MOCK_DATA.map(todo => todo.id === action.payload.id ? action.payload : todo);
    setStorage("mockData", newData);
    return {
      ...state,
      MOCK_DATA: newData
    }
  }
  default:
    return state
  }
}

export default AppReducer;
