import React from 'react';
import styles from "./styles.module.scss";
import deleteImage from '../../assets/delete.svg'
import decBtn from '../../assets/decBtn.svg'
import incBtn from '../../assets/incBtn.svg'
import { decCartProduct, deleteCartProductFromCart, ICartProduct, incCartProduct } from '../../store/slices/cart';
import { useAppDispatch } from '../../store/hooks';

interface CartItemProps {
    product: ICartProduct
}

const CartItem = ({product}: CartItemProps) => {

    const dispatch = useAppDispatch()
    
    const handleDelete = () => {
        dispatch(deleteCartProductFromCart(product))
    }

    const handleDec = () => {
        if(product.count === 1) handleDelete()
        else dispatch(decCartProduct(product))
    }

    const handleInc = () => {
        dispatch(incCartProduct(product))
    }



    return (
        <div className={styles.item}>
            <div className={styles.item__main}>
                <div className={styles.image}>
                    <img src={product.img} alt="" />
                </div>
                <div className={styles.info}>
                    <p className={styles.info__name}>{product.name}</p>
                    <p className={styles.info__price}>{product.price} ₽</p>
                </div>
                <div className={styles.delete}>
                    <img src={deleteImage} alt="" onClick={handleDelete}/>
                </div>
            </div>
            <div className={styles.item__stats}>
                <div className={styles.count}>
                    <img src={decBtn} alt="" onClick={handleDec}/>
                    <span className={styles.count__num}>{product.count}</span>
                    <img src={incBtn} alt="" onClick={handleInc}/>
                </div>
                <span className={styles.price}>{product.totalPrice} ₽</span>
            </div>
        </div>
    );
};

export default CartItem;


