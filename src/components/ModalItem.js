import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from './ButtonCheckout';

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

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Info>
          <InfoHeader>
            <InfoTitle>{openItem.name}</InfoTitle>
            <InfoPrice>
              {openItem.price.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}
            </InfoPrice>
          </InfoHeader>
          <ButtonCheckout>Добавить</ButtonCheckout>
        </Info>
      </Modal>
    </Overlay>
  );
};
