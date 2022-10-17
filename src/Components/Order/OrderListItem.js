import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import {
  totalPriceItems,
  formatCurrency,
} from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 15px 0;
  cursor: pointer;
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

const Toppings = styled.div`
  color: #9a9a9a;
  font-size: 14px;
`;

export const OrderListItem = ({
  order,
  removeOrderItem,
  index,
  setOpenItem,
}) => {
  const topping = order.topping
    .filter((item) => item.checked)
    .map((item) => item.name)
    .join(', ');

  const refDeleteButton = useRef(null);

  return (
    <OrderItemStyled
      onClick={(e) =>
        e.target !== refDeleteButton.current && setOpenItem({ ...order, index })
      }
    >
      <ItemName>
        {order.name} {order.choice}
      </ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order), 'RUB')}</ItemPrice>
      <TrashButton
        ref={refDeleteButton}
        onClick={() => removeOrderItem(order.id)}
      />
      {topping && <Toppings>Допы: {topping}</Toppings>}
    </OrderItemStyled>
  );
};
