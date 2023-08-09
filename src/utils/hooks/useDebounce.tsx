import { useRef } from 'react';

const useDebounce = (func: any, delay: number) => {
	const ref = useRef<null | number>(null);

	return (...args: any[]) => {
		ref.current && clearTimeout(ref.current);
		ref.current = window.setTimeout(() => func(...args), delay);
	};
};

export default useDebounce;
