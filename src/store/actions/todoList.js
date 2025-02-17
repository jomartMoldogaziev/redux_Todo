export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";


export const add_todo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      text,
      id: Date.now(),
      complete: false,
    },
  };
};


export const toggle_todo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});



export const delete_todo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
