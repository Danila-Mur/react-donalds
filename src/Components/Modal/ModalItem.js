import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Button/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import {
  totalPriceItems,
  formatCurrency,
} from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 250px);
  padding: 0 30px;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InfoTitle = styled.h3`
  font-size: 30px;
`;

const InfoPrice = styled.h3`
  font-size: 30px;
  font-weight: 400;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);

  const closeModal = (e) => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Info>
          <InfoHeader>
            <InfoTitle>{openItem.name}</InfoTitle>
            <InfoPrice>{formatCurrency(openItem.price, 'RUB')}</InfoPrice>
          </InfoHeader>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order), 'RUB')}</span>
          </TotalPriceItem>
          <ButtonCheckout
            onClick={addToOrder}
            disabled={order.choices && !order.choice}
          >
            Добавить
          </ButtonCheckout>
        </Info>
      </Modal>
    </Overlay>
  );
};
