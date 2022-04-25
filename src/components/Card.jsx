import React from "react";
import styled from "styled-components";

const Card = ({ news }) => {
  return (
    <Root>
      <CardImage src={news.urlToImage} />
      <CardTitle>{news.title}</CardTitle>
    </Root>
  );
};
const Root = styled.div`
  width: 370px;
  height: 400px;
  border-radius: 15px;
  background-color: #f7f7f7;
  padding: 10px;
  position: relative;
  justify-self: center;
`;
const CardTitle = styled.h4`
  font-size: 20px;
`;
const CardImage = styled.img`
  width: 350px;
  height: 300px;
  object-fit: contain;
`;

export default Card;
