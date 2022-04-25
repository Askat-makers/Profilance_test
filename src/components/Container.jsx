import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Root>{children}</Root>;
};
const Root = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
`;

export default Container;
