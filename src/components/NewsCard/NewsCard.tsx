import React, { FC } from "react";
import { NewsArticle } from "../../types/response";
import styles from "./NewsCard.module.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Col, Row } from "react-bootstrap";

dayjs.extend(relativeTime);

interface INewsCardProps {
  newsArticle: NewsArticle;
}

const NewsCard: FC<INewsCardProps> = ({ newsArticle }) => {
  return (
    <div
      onClick={() => window.open(newsArticle.url, "_blank")}
      className={styles.card}
    >
      <img src={newsArticle.imageUrl} alt="" className={styles.image} />
      <h1 className={styles.title}>{newsArticle.title}</h1>
      <p>{newsArticle.summary}</p>
      <Row>
        <Col>
          <p>{dayjs(newsArticle.publishedAt).fromNow()}</p>
        </Col>
        <Col className={styles.flexEnd}>
          <p>{newsArticle.newsSite}</p>
        </Col>
      </Row>
    </div>
  );
};

export default NewsCard;
