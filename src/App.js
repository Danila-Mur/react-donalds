import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/orderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: 'AIzaSyAVaxnhNLsv0qtE9msgsU6civq5ZCfpPl0',
  authDomain: 'mrdonalds-959ee.firebaseapp.com',
  projectId: 'mrdonalds-959ee',
  storageBucket: 'mrdonalds-959ee.appspot.com',
  messagingSenderId: '304079052930',
  appId: '1:304079052930:web:6fcdf46d0052673435949b',
};

firebase.initializeApp(firebaseConfig);

function App() {
  const openItem = useOpenItem();
  const orders = useOrders();
  const auth = useAuth(firebase.auth);
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{auth, openItem}}>
      <GlobalStyle />
      <NavBar/>
      <Order {...orders} {...openItem} {...auth} {...orderConfirm} />
      <Menu  />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}

      {orderConfirm.openOrderConfirm && (
        <OrderConfirm
          {...orders}
          {...auth}
          {...orderConfirm}
          firebaseDatabase={firebase.database}
        />
      )}
    </Context.Provider>
  );
}

export default App;
