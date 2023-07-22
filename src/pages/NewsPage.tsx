/* eslint-disable react/react-in-jsx-scope */

import { NewsCardExtension } from "../components/NewsCardExtension";
import { Title } from "../styledComponents/Text";
import { useLocation } from "react-router-dom";
import { getStoryById } from "../redux/actions/newsAction";
import { useQuery } from "react-query";
import { DefaultPageWrapper } from "../styledComponents/PageWrappers";
import { StyledButton } from "../styledComponents/Buttons";

export const NewsPage = () => {
  const location = useLocation();
  const path = location.pathname.split('/');
  const id =+path[path.length-1];
  const { isLoading, isError, data} = useQuery("story", ()=>getStoryById(id),
  {
    refetchOnWindowFocus: false,
  })
  
  return (
    <DefaultPageWrapper>      
      {isError ? (
        <Title>ОШИБКА</Title>
      ) : isLoading ? (
        <Title>Пост загружается...</Title>
      ) : (
        data && <NewsCardExtension key={data.id} data={data} />
      )}
    </DefaultPageWrapper>
  );
};

