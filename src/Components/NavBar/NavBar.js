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
  color: #fff;
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

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LoGout = styled.span`
  margin-right: 30px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const Figure = styled.figure`
  margin: 0 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
  <NavBarStyled>
    <Container>
      <Logo>
        <ImgLogo src={logoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      {authentication ? (
        <User>
          <Figure>
            <img src={signImg} alt={authentication.displayName} />
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <LoGout onClick={logOut} title="Выйти">
            X
          </LoGout>
        </User>
      ) : (
        <Login onClick={logIn}>
          Войти
          <img src={signImg} alt="sign" />
        </Login>
      )}
    </Container>
  </NavBarStyled>
);
