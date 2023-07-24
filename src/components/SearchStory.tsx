import { ColoredLink } from "../styledComponents/Links";
import { useState } from "react";
/* eslint-disable react/react-in-jsx-scope */
export const SearchStory = () => {
	const [input, setInput] = useState("36823605");
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
