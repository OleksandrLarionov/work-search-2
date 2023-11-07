import { ADD_TO_FAVORITE } from '../actions';
import { REMOVE_FROM_FAVORITE } from '../actions';
const inizialState = {
	content: [],
};

const favoriteReducer = (state = inizialState, action) => {
	switch (action.type) {
		case ADD_TO_FAVORITE:
			return {
				...state,

				content: [...state.content, action.payload],
			};
		case REMOVE_FROM_FAVORITE:
			return {
				...state,
				content: state.content.filter((book, i) => i !== action.payload),
			};
		default:
			return state;
	}
};

export default favoriteReducer;
