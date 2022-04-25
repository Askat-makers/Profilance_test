import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../app/reducers/UserSlice";
import { useEffect } from "react";

const Modal = ({ hideModal }) => {
  const [candidate, setCandidate] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(logIn(candidate));
  };

  useEffect(() => {
    if (user) {
      hideModal();
    }
  }, [user, hideModal]);

  return (
    <Root>
      <ModalBody>
        <Cancel onClick={hideModal}>&#10006;</Cancel>
        <Title>Войти</Title>
        {error && <Error>{error}</Error>}
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Введите email"
            value={candidate.email}
            onChange={(e) =>
              setCandidate({ ...candidate, email: e.target.value })
            }
          />
          <Input
            type="password"
            placeholder="Введите пароль"
            value={candidate.password}
            onChange={(e) =>
              setCandidate({ ...candidate, password: e.target.value })
            }
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Загрузка..." : "Войти"}
          </Button>
        </Form>
      </ModalBody>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;
const Title = styled.h2`
  text-align: center;
`;
const ModalBody = styled.div`
  width: 450px;
  /* height: 250px; */
  background-color: #fff;
  padding: 15px;
  position: relative;
`;
const Cancel = styled.span`
  position: absolute;
  right: 10px;
  top: 5px;
  font-size: 26px;
  cursor: pointer;
`;
const Error = styled.h4`
  color: #ff2e2e;
  font-size: 18px;
  font-weight: 500;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  margin: 5px 0;
  padding: 5px;
  font-size: 16px;
  width: 100%;
`;
const Button = styled.button`
  border: none;
  background-color: #888888;
  color: #fff;
  padding: 15px;
  width: 150px;
  margin-top: 10px;
`;

export default Modal;
