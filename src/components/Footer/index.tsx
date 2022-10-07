import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import globe from '../../assets/globe.svg'
import vk from '../../assets/VK.svg'
import telegram from '../../assets/Telegram.svg'
import whatsapp from '../../assets/Whatsapp.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles.footer__title} to="/">QPICK</Link>
      <div className={styles.nav}>
        <div className={styles.nav__left}>
          <a href="#">Избранное</a>
          <Link to="/cart">Корзина</Link>
          <a href="#">Контакты</a>
        </div>
        <div className={styles.nav__right}>
          <a href="#">Условия сервиса</a>
          <div className={styles.nav__langs}>
            <img src={globe} alt="" />
            <span className={`${styles['nav__change-lang']} ${styles['nav__change-lang--active']}`}>Рус</span>
            <span className={styles['nav__change-lang']}>Eng</span>
          </div>
        </div>
      </div>
      <div className={styles.socials}>
        <div className={styles.socials__container}>
          <span>
            <img src={vk} alt="" />
          </span>
          <span>
            <img src={telegram} alt="" />
          </span>
          <span>
            <img src={whatsapp} alt="" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
