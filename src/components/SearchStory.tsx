import { useState } from 'react';
import { StyledLink } from '@ui/Links';
import { ReactComponent as SearchIcon } from '@ui/icons/searchIcon.svg';
import styled from 'styled-components';
const SearchStory = () => {
	const [input, setInput] = useState('');
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
			<NavbarLink className="nav-link" to={input && `/item/${input}`}>
				{input && <SearchIcon />}
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
	background: ${(props) => props.theme.BGcolors.gray};
	border-radius: 50px;
	padding: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
`;
