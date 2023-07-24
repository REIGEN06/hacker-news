import fromUnixTime from 'date-fns/fromUnixTime';

export const UnixToLocaleTime = (initTime = 0) => {
	return fromUnixTime(initTime).toLocaleTimeString('ru-RU');
};

//потенциально уязвимый код (доступ к DOM)
export const decodeHtml = (html: string) => {
	const txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};
