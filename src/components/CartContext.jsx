import React, { createContext, useState, useCallback, useMemo, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const toggleCartItem = useCallback((item) => {
        setCartItems(prevItems => {
            const isItemInCart = prevItems.find(cartItem => cartItem.id === item.id);
            if (isItemInCart) {
                return prevItems.filter(cartItem => cartItem.id !== item.id);
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    }, []);

    const value = useMemo(() => ({
        cartItems,
        toggleCartItem
    }), [cartItems, toggleCartItem]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
