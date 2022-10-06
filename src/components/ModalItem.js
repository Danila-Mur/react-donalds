import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

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
  margin-bottom: 20px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 30px;
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
          <InfoTitle>{openItem.name}</InfoTitle>
          <InfoPrice>
            {openItem.price.toLocaleString('ru-RU', {
              style: 'currency',
              currency: 'RUB',
            })}
          </InfoPrice>
        </Info>
        <Button />
      </Modal>
    </Overlay>
  );
};
