import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Button/ButtonCheckout';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  min-width: 380px;
  height: calc(100% - 80px);
  padding: 20px;
  background-color: #fff;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
`;

const OrderTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const EmptyList = styled.p`
  text-align: center;
`;

const TotalPrice = styled.span`
  min-width: 65px;
  margin-left: 20px;
  text-align: right;
`;

export const Order = ({ orders }) => {
  return (
    <>
      <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          {orders.length ? (
            <OrderList>
              {orders.map((order) => (
                <OrderListItem order={order} />
              ))}
            </OrderList>
          ) : (
            <EmptyList>Списсок заказов пуст</EmptyList>
          )}
        </OrderContent>
        <Total>
          <span>ИТОГО</span>
          <span>5</span>
          <TotalPrice>850₽</TotalPrice>
        </Total>
        <ButtonCheckout>Оформить</ButtonCheckout>
      </OrderStyled>
    </>
  );
};