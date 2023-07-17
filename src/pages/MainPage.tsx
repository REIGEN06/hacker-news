import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsItem } from "../components/NewsItem";
import { getNewsIds } from "../redux/actions/newsAction";

/* eslint-disable react/react-in-jsx-scope */
export const MainPage = () => {
  const dispatch = useDispatch();
  const ids = useSelector((state: any) => state.news.ids);
  useEffect(() => {
    dispatch(getNewsIds());
  }, []);
  return (
    <>
      <h2>Main page</h2>
      {ids.map((newsitem: any) => (
        <NewsItem key={newsitem} news={newsitem} />
      ))}
    </>
  );
};
