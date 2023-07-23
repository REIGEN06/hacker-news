/* eslint-disable react/react-in-jsx-scope */
import { StoriesList } from "../components/StoriesList";
import { DefaultPageWrapper } from "../styledComponents/PageWrappers";
import { Title } from "../styledComponents/Text";

export const MainPage = () => {
  return (
    <DefaultPageWrapper>
      <Title>Страница свежих новостей</Title>
      <StoriesList />
    </DefaultPageWrapper>
  );
};

