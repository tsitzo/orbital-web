import React, { FC } from "react";
import Masonry from "react-masonry-css";
import { NewsArticle } from "../../types/response";

interface INewsGridProps {
  news: NewsArticle[];
}

const breakpointColumnsObj = {
  default: 3,
  1100: 1,
  700: 1,
  500: 1,
};

const NewsGrid: FC<INewsGridProps> = ({ news }) => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {news.map((el, i) => (
        <p>{el.title}</p>
      ))}
    </Masonry>
  );
};

export default NewsGrid;
