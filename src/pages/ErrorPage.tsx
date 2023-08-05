import styled from 'styled-components';
import { DefaultPageWrapper } from '@ui/PageWrappers';
import { Title, Text } from '@ui/Text';
import { StyledLinkBlueWithoutBG } from '@ui/Links';
import { StyledButton } from '@ui/Buttons';

const ErrorPage = () => {
	return (
		<ErrorPageWrapper>
			<Title>Упс!</Title>
			<Text>Похоже, что такой страницы нет</Text>
			<Text>
				Не расстраивайся, лучше поищи что-нибудь интересное на
				<StyledLinkBlueWithoutBG to="/">
					{' '}
					странице новостей
				</StyledLinkBlueWithoutBG>
			</Text>
			<StyledLinkBlueWithoutBG to="/">
				<StyledButton padding="10px">Хочу новостей!</StyledButton>
			</StyledLinkBlueWithoutBG>
		</ErrorPageWrapper>
	);
};

export default ErrorPage;

const ErrorPageWrapper = styled(DefaultPageWrapper)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
