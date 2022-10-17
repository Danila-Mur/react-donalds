import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

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

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth}/>
      <Order {...orders} {...openItem} {...auth}/>
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
