import React, {useEffect} from 'react'
import styles from "./styles.module.scss"
import star from '../../assets/star.svg'
import { addCartProductToCart, IProduct } from '../../store/slices/cart';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {

    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart)

    useEffect(() => {
      console.log(cart)
    }, [cart])
    

    const handleAddToCart = () => {
        dispatch(addCartProductToCart(product))
    }

    return (
      <div className={styles.product}>
          <div className={styles.product__picture}>
              <img src={product.img} alt="" />
          </div>
          <div className={styles.stats}>
              <div className={`${styles.stats__container} ${styles.stats__container1}`}>
                  <span className={styles.stats__name}>{product.name}</span>
                  <div className={styles.stats__prices}>
                      <span className={styles.stats__price}>{product.price}</span>
                      <span className={styles['stats__price--old']}>{product.oldPrice}</span>
                  </div>
              </div>
              <div className={styles.stats__container}>
                  <div className={styles.stats__rating}>
                      <img src={star} alt="" />
                      <span>{product.rating}</span>
                  </div>
                  <span className={styles.stats__buy} onClick={handleAddToCart}>Купить</span>
              </div>
          </div>
      </div>
    );
  };

export default Product;