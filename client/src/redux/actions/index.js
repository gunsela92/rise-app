export const SET_MOCK_DATA = "SET_MOCK_DATA";
export const ADD_TODO = "ADD_TODO";

export const setMockData = (mockData) => ({
  type: SET_MOCK_DATA,
  payload: mockData,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});
