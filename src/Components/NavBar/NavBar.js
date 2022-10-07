import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logo.svg';
import signImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 80px;
  background-color: #299b01;
  z-index: 999;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
`;

const Logo = styled.div`
  display: flex;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #fff;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Container>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      <Login>
        Войти
        <img src={signImg} alt="sign" />
      </Login>
    </Container>
  </NavBarStyled>
);
