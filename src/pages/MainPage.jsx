import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../components/Container";

const MainPage = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Root>
      <Container>
        <Title>{user ? `Привет, ${user.email}` : "Привет, Гость"}</Title>
      </Container>
    </Root>
  );
};
const Root = styled.div`
  padding-top: 30px;
`;
const Title = styled.h1``;

export default MainPage;
