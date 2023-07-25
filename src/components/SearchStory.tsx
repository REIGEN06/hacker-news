import { useState } from 'react';
import { ColoredLink } from '@ui/Links';

const SearchStory = () => {
	const [input, setInput] = useState('36823605');
	const path = `/item/${input}`;
	return (
		<>
			<input
				type="text"
				name="name"
				placeholder="36823605"
				onChange={(event) => setInput(event.target.value)}
			/>
			<ColoredLink className="nav-link" to={path}>
				🔎
			</ColoredLink>
		</>
	);
};

export default SearchStory;
