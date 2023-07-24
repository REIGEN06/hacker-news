export const UnixToLocaleTime = (initTime = 0) => {
	return new Date(initTime * 1000).toLocaleTimeString('ru-RU');
};

//потенциально уязвимый код (доступ к DOM)
export const decodeHtml = (html: string) => {
	const txt = document.createElement('textarea');
	txt.innerHTML = html;
	return txt.value;
};
