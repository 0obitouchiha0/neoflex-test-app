import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
    img: string,
    name: string,
    price: number,
    oldPrice?: number,
    rating: number
}

export interface IProductsGroup {
    name: string,
    items: IProduct[]
}

export interface ICartProduct extends IProduct {
    count: number,
    totalPrice: number
}


interface ICartState {
    totalCount: number,
    totalPrice: number,
    products: ICartProduct[]
}

const cartInitialState: ICartState = {
    totalCount: 0,
    totalPrice: 0,
    products: []
}


const cartSlice = createSlice({
    name: 'products',
    initialState: cartInitialState,
    reducers: {
        addCartProductToCart(state: ICartState, action: PayloadAction<IProduct>) {
            state.totalCount++
            state.totalPrice += action.payload.price

            for(let i in state.products) {
                if(state.products[i].name === action.payload.name) {
                    state.products[i].count++
                    state.products[i].totalPrice += state.products[i].price
                    return
                }
            }
            state.products.push({
                ...action.payload,
                count: 1,
                totalPrice: action.payload.price
            })
        },
        deleteCartProductFromCart(state: ICartState, action: PayloadAction<ICartProduct>) {
            state.totalCount -= action.payload.count
            state.totalPrice -= action.payload.price * action.payload.count
            state.products = state.products.filter(product => product.name !== action.payload.name)
        },
        decCartProduct(state: ICartState, action: PayloadAction<ICartProduct>) {
            state.totalCount--
            state.totalPrice -= action.payload.price

            for(let i in state.products) {
                if(state.products[i].name === action.payload.name) {
                    state.products[i].count--
                    state.products[i].totalPrice -= state.products[i].price
                }
            }
        },
        incCartProduct(state: ICartState, action: PayloadAction<ICartProduct>) {
            state.totalCount++
            state.totalPrice += action.payload.price

            for(let i in state.products) {
                if(state.products[i].name === action.payload.name) {
                    state.products[i].count++
                    state.products[i].totalPrice += state.products[i].price
                }
            }
        },
    }
})

export default cartSlice.reducer
export const {addCartProductToCart, deleteCartProductFromCart, decCartProduct, incCartProduct} = cartSlice.actions