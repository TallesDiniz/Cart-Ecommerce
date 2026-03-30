import {createContext, type ReactNode, useState, useMemo} from 'react'
import type {ProductsProps} from '../pages/Home'

interface CartContextData {
    cart: CartProps[];
    cartAmount: number;
    addItemCart: (newItem: ProductsProps) => void;
    removeItemCart: (nproduct: CartProps) => void;
    total: string;

}

interface CartProviderProps{
    readonly children: ReactNode;
}

interface CartProps {
    id: number;
    title: string;
    description: string;
    price: number;
    cover: string;
    amount: number;
    total: number;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({children}: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([])
    const [total, setTotal] = useState("")
    const value = useMemo(() => ({
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total
    }), [cart, total])
    
    function addItemCart(newItem: ProductsProps){
        const indexItem = cart.findIndex(item => item.id === newItem.id)

        if(indexItem !== -1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;

            setCart(cartList)
            totalResultCart(cartList)
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        setCart(products => [...products, data])
        totalResultCart([...cart, data])
    }

    function removeItemCart(product: CartProps){
        const indexItem = cart.findIndex(item => item.id === product.id)

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
            setCart(cartList)
            totalResultCart(cartList)
            return
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem)
        totalResultCart(removeItem)
    }

    function totalResultCart(items: CartProps[]){
        let myCart = items;
        let result = myCart.reduce((acc, obj) => {return acc + obj.total}, 0)
        const resultFormatted = result.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        setTotal(resultFormatted);
    }

    

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;