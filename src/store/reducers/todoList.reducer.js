import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/todoList";


const initialState = [
	{
		text: "Сделать уроки",
		complete: false
	},
	{
		text: "Сделать домашку",
		complete: false
	}
];

export const todoList_reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			 return [action.payload, ...state];

		case TOGGLE_TODO:
			return state.map((todo, id) => 
				id === action.payload ? { ...todo, complete: !todo.complete } : todo
			);
		case DELETE_TODO:
      
      return state.filter((_, id) => id !== action.payload);

		default:
			return state;
	}
};
