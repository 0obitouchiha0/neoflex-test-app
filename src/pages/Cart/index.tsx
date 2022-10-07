import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./styles.module.scss"
import CartItem from '../../components/CartItem';
import { useAppSelector } from '../../store/hooks';


const Cart = () => {

  const {products, totalPrice} = useAppSelector(state => state.cart)

  return (
    <>
      <Header/>
      <div className={styles.cart}>
        <div className={styles.cart__container}>
          <div className={styles.main}>
            <p className={styles.main__title}>Корзина</p>
            <div className={styles.main__list}>
              {products.map(product => <CartItem product={product}/>)}
            </div>
          </div>
          <div className={styles.total}>
            <div className={styles.total__container}>
              <div className={styles.total__info}>
                <span className={styles.total__title}>итого</span>
                <span className={styles.total__price}>₽ {totalPrice}</span>
              </div>
              <button className={styles.total__btn}>Перейти к оформлению</button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Cart;
