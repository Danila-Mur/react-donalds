import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from './Order';
import { ButtonCheckout } from '../Button/ButtonCheckout';
import {
  projection,
  totalPriceItems,
  formatCurrency,
} from '../Functions/secondaryFunction';

const Modal = styled.div`
  background-color: white;
  width: 600px;
  padding: 30px;
`;
const Text = styled.h3`
  margin-bottom: 30px;
  text-align: center;
`;

const rulesData = {
  itemName: ['name'],
  price: ['price'],
  count: ['count'],
  topping: [
    'topping',
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
    (arr) => (arr.length ? arr : 'no topping'),
  ],
  choice: ['choices', (item) => (item ? item : 'no choices')],
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));

  dataBase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder,
  });
};

export const OrderConfirm = ({
  orders,
  setOrders,
  authentication,
  setOpenOrderConfirm,
  firebaseDatabase,
}) => {
  const dataBase = firebaseDatabase();

  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );

  return (
    <Overlay>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        <Text>Осталось только подтвердить ваш заказ</Text>
        <Total>
          <span>Итого</span>
          <TotalPrice>{formatCurrency(total, 'RUB')}</TotalPrice>
        </Total>
        <ButtonCheckout
          onClick={() => {
            sendOrder(dataBase, orders, authentication);
            setOrders([]);
            setOpenOrderConfirm(false);
          }}
        >
          Подтвердить
        </ButtonCheckout>
      </Modal>
    </Overlay>
  );
};
