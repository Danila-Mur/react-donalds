import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunction';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 30px;
  margin-top: 30px;
  padding: 15px;
  color: white;
  font-size: 30px;
  z-index: 1;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0px 0px 50px 30px rgba(0, 0, 0, 1);
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map((item) => (
      <Item img={item.img} key={item.id} onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{formatCurrency(item.price, 'RUB')}</p>
      </Item>
    ))}
  </List>
);
