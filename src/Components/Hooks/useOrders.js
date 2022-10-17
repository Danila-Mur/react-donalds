import { useState } from 'react';

export function useOrders() {
  const [orders, setOrders] = useState([]);

  const removeOrderItem = (id) => {
    setOrders((orders) => orders.filter((item) => item.id !== id));
  };

  return { orders, setOrders, removeOrderItem };
}
