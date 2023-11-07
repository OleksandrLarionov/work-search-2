import { configureStore, combineReducers } from '@reduxjs/toolkit';
import jobsReducers from '../reducers/jobs';

import favoriteReducer from '../reducers/favorite';

const allReducers = combineReducers({ favorite: favoriteReducer, jobs: jobsReducers });

const store = configureStore({
	reducer: allReducers,
});

export default store;
