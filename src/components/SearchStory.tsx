import { useState } from 'react';
import { StyledLink } from '@ui/Links';
import { ReactComponent as SearchIcon } from '@ui/icons/searchIcon.svg';
import styled from 'styled-components';
const SearchStory = () => {
	const [input, setInput] = useState('36823605');
	return (
		<SearchWrapper>
			<StyledInput
				type="text"
				name="name"
				placeholder="Введите айди поста"
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					setInput(event.target.value)
				}
			/>
			<NavbarLink className="nav-link" to={`/item/${input}`}>
				<SearchIcon />
			</NavbarLink>
		</SearchWrapper>
	);
};

export default SearchStory;

const NavbarLink = styled(StyledLink)`
	padding: 10px;
`;

const SearchWrapper = styled.section`
	background: ${(props) => props.theme.BGcolors.white};
	display: flex;
	align-items: center;
	gap: 5px;
`;

const StyledInput = styled.input`
	background: ${(props) => props.theme.BGcolors.white};
	display: flex;
	align-items: center;
	gap: 5px;
`;
