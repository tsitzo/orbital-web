import React, { useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import styles from "./News.module.css";

interface NewsSite {
  url: string;
  name: string;
}

const News = () => {
  const [newsSite, setNewsSite] = useState<NewsSite>({ url: "", name: "All" });
  const newsSites: NewsSite[] = [
    { url: "", name: "All" },
    { url: "nasa.gov", name: "Nasa" },
    { url: "spaceflightnow.com", name: "Spaceflightnow" },
    { url: "teslarati.com", name: "Teslarati" },
    { url: "nasaspaceflight.com", name: "Nasaspaceflight" },
    { url: "spacenews.com", name: "Spacenews" },
    { url: "elonx.net", name: "Elonx" },
    { url: "esa.int", name: "Esa" },
  ];
  return (
    <Container className="my-6">
      <Row>
        <Col xs={9}>
          <p className={styles.header}>News</p>
        </Col>
        <Col xs={3} className={styles.flexEnd}>
          <DropdownButton
            id="dropdown-basic-button"
            title={newsSite.name + " "}
          >
            {newsSites.map((el, i) => (
              <Dropdown.Item onClick={() => setNewsSite(el)}>
                {el.name}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
