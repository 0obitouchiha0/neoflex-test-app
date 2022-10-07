import React from 'react';
import { IProductsGroup } from '../../store/slices/cart';
import Product from '../Product';
import styles from "./styles.module.scss";


interface ProductsGroupProps {
  group: IProductsGroup
}


const ProductsGroup = ({group}: ProductsGroupProps) => {
  console.log(styles)
  return (
    <div className={styles.group}>
        <p className={styles.group__title}>{group.name}</p>
        <div className={styles.group__container}>
            {group.items.map(product => <Product product={product}/>)}
        </div>
    </div>
  );
};

export default ProductsGroup;