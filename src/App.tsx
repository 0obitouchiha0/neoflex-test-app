import React from 'react';
import styles from './App.module.scss';
import {Routes, Route, Navigate} from 'react-router-dom'
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import { IProductsGroup } from './store/slices/cart';
import product1 from './assets/product1.png'
import product2 from './assets/product2.png'
import product3 from './assets/product3.png'
import product4 from './assets/product4.png'
import product5 from './assets/product5.png'
import product6 from './assets/product6.png'

const productGroups: IProductsGroup[] = [
  {
    name: 'Наушники',
    items: [
      {
        name: 'Apple BYZ S852I',
        img: require('./assets/product1.png'),
        price: 2927,
        oldPrice: 3527,
        rating: 4.7
      },
      {
        name: 'Apple EarPods',
        img: require('./assets/product2.png'),
        price: 2327,
        rating: 4.5
      },
      {
        name: 'Apple EarPods',
        img: require('./assets/product3.png'),
        price: 2327,
        rating: 4.5
      }
    ]
  },
  {
    name: 'Беспроводные наушники',
    items: [
      {
        name: 'Apple AirPods',
        img: require('./assets/product4.png'),
        price: 9527,
        rating: 4.7
      },
      {
        name: 'GERLAX GH-04',
        img: require('./assets/product5.png'),
        price: 6527,
        rating: 4.7
      },
      {
        name: 'BOROFONE BO4',
        img: require('./assets/product6.png'),
        price: 7527,
        rating: 4.7
      }
    ]
  }
]

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path='/' element={<Main productGroups={productGroups}/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </div>
  );
}

export default App;
