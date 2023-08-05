import { fromUnixTime } from 'date-fns';

export const UnixToLocaleTime = (initTime = 0) => {
	return fromUnixTime(initTime).toLocaleTimeString('ru-RU');
};
