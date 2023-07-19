import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewsList } from "../components/NewsList";
import { getNewStoriesIds } from "../redux/actions/newsAction";

/* eslint-disable react/react-in-jsx-scope */
export const MainPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.news); //+1
  console.log("RENDER", store);
  useEffect(() => {
    dispatch(getNewStoriesIds());
  }, []);

  return (
    <>
      <h2>Main page</h2>
      <NewsList data={store.ids} /> {/* +1 */}
    </>
  );
};
