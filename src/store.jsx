import { appReducer } from "./reducer";

export const createStore = (reducer) => {
	let state = reducer(undefined, {});
	const subscribers = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);
			subscribers.forEach((subscriber) => subscriber());
		},
		getState: () => state,
		subscribe: (callback) => {
			subscribers.push(callback);

			return () => {
				const index = subscribers.indexOf(callback);
				if (index !== -1) subscribers.splice(index, 1);
			};
		},
	};
};

export const store = createStore(appReducer);
