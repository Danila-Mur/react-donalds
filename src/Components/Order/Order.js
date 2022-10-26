import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Button/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import {
  totalPriceItems,
  formatCurrency,
} from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 380px;
  height: calc(100% - 80px);
  padding: 20px;
  background-color: #fff;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
`;

export const OrderTitle = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

export const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const TotalPrice = styled.span`
  min-width: 65px;
  margin-left: 20px;
  text-align: right;
`;

export const Order = ({
  orders,
  setOrders,
  setOpenItem,
  authentication,
  logIn,
  setOpenOrderConfirm,
}) => {
  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );

  const totalCounter = orders.reduce(
    (result, order) => order.count + result,
    0
  );

  const removeOrderItem = (id) => {
    setOrders((orders) => orders.filter((item) => item.id !== id));
  };

  return (
    <>
      <OrderStyled>
        <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
        <OrderContent>
          {orders.length ? (
            <OrderList>
              {orders.map((order, index) => (
                <OrderListItem
                  key={index}
                  order={order}
                  removeOrderItem={removeOrderItem}
                  setOpenItem={setOpenItem}
                  index={index}
                />
              ))}
            </OrderList>
          ) : (
            <EmptyList>Списсок заказов пуст</EmptyList>
          )}
        </OrderContent>
        <Total>
          <span>ИТОГО</span>
          <span>{totalCounter}</span>
          <TotalPrice>{formatCurrency(total, 'RUB')}</TotalPrice>
        </Total>
        <ButtonCheckout
          onClick={() => (authentication ? setOpenOrderConfirm(true) : logIn())}
        >
          Оформить
        </ButtonCheckout>
      </OrderStyled>
    </>
  );
};
