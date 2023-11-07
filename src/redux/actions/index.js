export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';
export const GETS_JOBS = 'GETS_JOBS';
export const GETS_COMPANY = 'GETS_COMPANY';
export const addToFavoriteAction = (action) => ({ type: 'ADD_TO_FAVORITE', payload: action });

export const removeFromFavoriteAction = (index) => ({
	type: 'REMOVE_FROM_FAVORITE',
	payload: index,
});

export const getAllJobs = (baseEndpoint, query) => {
	return async (dispatch) => {
		try {
			const response = await fetch(baseEndpoint + query + '&limit=20');
			if (response.ok) {
				const fetchedJobs = await response.json();
				dispatch({
					type: GETS_JOBS,
					payload: fetchedJobs.data,
				});
			} else {
				alert('Error fetching results');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
export const getCompany = (baseEndpoint, company) => {
	return async (dispatch) => {
		try {
			const response = await fetch(baseEndpoint + company + '&limit=20');
			if (response.ok) {
				const fetchedCompany = await response.json();
				dispatch({
					type: GETS_COMPANY,
					payload: fetchedCompany.data,
				});
			} else {
				alert('Error fetching results');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
