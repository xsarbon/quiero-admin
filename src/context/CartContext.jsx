import { createContext, useState, useContext } from "react"




/* Context */
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

/* Funcion CartContextProvider que contiene todas las funciones a utilizar */
export function CartContextProvider({ children }) {

    /* Funcion que calcula el precio total del carrito de compras */
    const totalPrice = () => {
        return cartList.reduce((acc, product) => acc += (product.price * product.quantity), 0)
    }

    const [cartList, setCartList] = useState([])

    /* Funcion que busca en el cartList los productos que tengan el ID exactamente igual al ID pasado por parametro */
    const isInCart = (id) => cartList.find(prod => prod.id === id)

    /* Funcion que agrega el producto al carrito o actualiza la cantidad del producto en carrito si ya está agregado */
    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cartList.map(prod => {
                if (prod.id === item.id) {
                    const newQuantity = prod.quantity + quantity
                    return { ...prod, quantity: newQuantity }
                } else {
                    return prod
                }
            })
            setCartList(newCart)
        } else {
            const newProduct = { ...item, quantity: quantity }
            setCartList([...cartList, newProduct])
        }
    }



    /* Funcion que remueve el producto en carrito y del LS */
    const removeProduct = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
        localStorage.removeItem(JSON.stringify(id))
    }

    /* Funcion que borra todos los productos del carrito y del LS */
    const cleanCart = () => {
        setCartList([])
    }

    /* Funcion que muestra la cantidad total de productos en carrito */
    const totalQuantity = () => {
        return cartList.reduce((acc, product) => acc += product.quantity, 0)
    }

    return (
        <CartContext.Provider value={{
            addToCart,
            removeProduct,
            cleanCart,
            totalPrice,
            totalQuantity,
            cartList
        }}>
            {children}
        </CartContext.Provider>
    )

}