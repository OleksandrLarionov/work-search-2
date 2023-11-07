import { GETS_COMPANY, GETS_JOBS } from '../actions';

const initialState = {
	jobs: [],
	company: [],
};

const jobsReducers = (state = initialState, action) => {
	switch (action.type) {
		case GETS_JOBS:
			return {
				...state,
				jobs: action.payload,
			};
		case GETS_COMPANY:
			return {
				...state,
				jobs: action.payload,
			};

		default:
			return state;
	}
};
export default jobsReducers;
