import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductsGroup from '../../components/ProductsGroup';
import { IProductsGroup } from '../../store/slices/cart';
import styles from './styles.module.scss'

interface MainProps {
  productGroups: IProductsGroup[]
}

const Main = ({productGroups}: MainProps) => {
  return (
    <>
      <Header/>
      <div className={styles.main}>
        <div className={styles.main__container}>
          {productGroups.map(group => <ProductsGroup group={group}/>)}
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Main;
