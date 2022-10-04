import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../image/banner.png';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding 30px;
`;

const BannerBlock = styled.div`
  img {
    width: 100%;
  }
`;

export const Menu = () => (
  <MenuStyled>
    <BannerBlock>
      <img src={bannerImg} alt="banner" />
    </BannerBlock>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>
    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);
