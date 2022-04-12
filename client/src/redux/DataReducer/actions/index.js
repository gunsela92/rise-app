export const SET_MOCK_DATA = "SET_MOCK_DATA";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const setMockData = (mockData) => ({
  type: SET_MOCK_DATA,
  payload: mockData,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (todo) => ({
  type: DELETE_TODO,
  payload: todo,
})

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
})
