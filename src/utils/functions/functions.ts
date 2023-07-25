import { fromUnixTime } from 'date-fns';

export const UnixToLocaleTime = (initTime = 0) => {
	return fromUnixTime(initTime).toLocaleTimeString('ru-RU');
};

// DOMParser гарантированно не запускает какой-либо код JavaScript в качестве побочного эффекта
// Любые теги HTML будут игнорироваться, будет возвращено только текстовое содержимое.
export const decodeHtml = (html: string) => {
	const doc = new DOMParser().parseFromString(html, 'text/html');
	return doc.documentElement.textContent;
};
