import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { filterNews, getNews } from "../app/reducers/NewsSlice";
import Card from "../components/Card";
import Container from "../components/Container";

const NewsPage = () => {
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <Root>
      <Container>
        <Title>Новости</Title>
        <Input
          type="search"
          onChange={(e) => dispatch(filterNews(e.target.value))}
          placeholder="Live search..."
        />
        <Wrapper>
          {news.map((news) => (
            <Card key={news.title} news={news} />
          ))}
        </Wrapper>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  padding: 30px 0;
`;
const Title = styled.h2`
  font-size: 32px;
`;
const Input = styled.input`
  margin: 20px 0;
  padding: 5px;
  width: 300px;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  @media all and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default NewsPage;
