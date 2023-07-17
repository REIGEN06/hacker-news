/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export const NewsItem = (props: any) => {
  const news = props.news;

  const time = new Date(news.time * 1000).toLocaleTimeString("ru-RU");
  return (
    <>
      <p>{news}</p>
      {/* <p>{news.title}</p>
      <p>⭐: {news.score}</p>
      <p>by {news.by}</p>
      <p>{time}</p> */}
    </>
  );
};
