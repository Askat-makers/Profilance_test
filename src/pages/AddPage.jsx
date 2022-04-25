import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Container from "../components/Container";

const AddPage = () => {
  const { user } = useSelector((state) => state.user);

  if (user?.type !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <Container>
      <h2>Добавить пост</h2>
    </Container>
  );
};

export default AddPage;
