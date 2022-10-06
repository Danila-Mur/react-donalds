import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trash.svg';

const OrderItemStyled = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  min-width: 65px;
  margin-left: 20px;
  margin-right: 10px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 30px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`;

export const OrderListItem = () => (
  <OrderItemStyled>
    <ItemName>Js Burger</ItemName>
    <span>2</span>
    <ItemPrice>750R</ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);
