import { StoryType } from "../utils/const";

/* eslint-disable react/react-in-jsx-scope */
type StoryTypeObject = {
  data: StoryType;
};
export const NewsCard = (story: StoryTypeObject) => {
  console.log(story);

  return (
    <>
      {" "}
      <p>{story.data.by}</p>
    </>
  );
};
