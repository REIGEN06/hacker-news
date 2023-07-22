/* eslint-disable react/react-in-jsx-scope */
import { NewsList } from "../components/NewsList";
import { DefaultPageWrapper } from "../styledComponents/PageWrappers";
import { Title } from "../styledComponents/Text";

export const MainPage = () => {
  return (
    <DefaultPageWrapper>
      <Title>Страница свежих новостей</Title>
      <NewsList />
    </DefaultPageWrapper>
  );
};

