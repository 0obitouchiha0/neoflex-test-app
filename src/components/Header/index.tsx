import React from 'react';
import styles from "./styles.module.scss";
import heart from '../../assets/heart.svg'
import cart from '../../assets/cart.svg'
import { useAppSelector } from '../../store/hooks';
import {Link} from 'react-router-dom'

const Header = () => {

  const totalCount = useAppSelector(state => state.cart.totalCount)

  return (
    <header className={styles.header}>
      <div className={styles.header__title}>
        <Link to="/">QPICK</Link>
      </div>
      <div className={styles.header__nav}>
        <div className={styles.favourites}>
          <img src={heart} alt="" />
          <div className={`${styles.header__count} ${styles.favourites__count}`}>1</div>
        </div>
        <Link className={styles.cart} to="/cart">
          <img src={cart} alt="" />
          <div className={`${styles.header__count} ${styles.cart__count}`}>{totalCount}</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;


