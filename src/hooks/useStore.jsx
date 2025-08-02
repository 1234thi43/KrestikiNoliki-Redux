import { useEffect, useState } from "react";

export const useStore = (store) => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return unsubscribe;
	}, [store]);

	return state;
};
