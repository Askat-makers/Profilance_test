import React from "react";
import styled from "styled-components";
import Container from "./Container";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../app/reducers/UserSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [isShowModal, setIsShowModal] = useState(false);
  const { user } = useSelector((state) => state.user);

  const hideModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <>
      <Root>
        <Container>
          <Wrapper>
            <Wrapper>
              <Link to="/">
                <Image src={logo} />
              </Link>
              <Link to="/news">
                <NavElem marginLeft="20px">Новости</NavElem>
              </Link>
              {user?.type === "admin" ? (
                <Link to="/add-news">
                  <NavElem marginLeft="20px">Добавить пост</NavElem>
                </Link>
              ) : null}
            </Wrapper>
            {user ? (
              <Button>
                <NavElem marginLeft="0" onClick={() => dispatch(logOut())}>
                  Выйти
                </NavElem>
              </Button>
            ) : (
              <Button>
                <NavElem
                  marginLeft="0"
                  onClick={() => setIsShowModal(!isShowModal)}
                >
                  Войти
                </NavElem>
              </Button>
            )}
          </Wrapper>
        </Container>
      </Root>
      {isShowModal && <Modal hideModal={hideModal} />}
    </>
  );
};
const Root = styled.div`
  background-color: #f7f7f7;
  padding: 20px 0;
  -webkit-box-shadow: 0px 5px 5px -5px rgba(124, 124, 124, 0.6);
  -moz-box-shadow: 0px 5px 5px -5px rgba(124, 124, 124, 0.6);
  box-shadow: 0px 5px 5px -5px rgba(124, 124, 124, 0.6);
  position: sticky;
  top: 0;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavElem = styled.span`
  font-size: 26px;
  color: #424242;
  margin-left: ${(props) => props.marginLeft};
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const Image = styled.img``;

export default Navbar;
