"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  console.log("CartProvider is rendering with cart:", cart);  

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const updatedCart = [...prev, product];
      console.log("Added to cart:", updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const updatedCart = prev.filter((product) => product.id !== id);
      console.log("Removed from cart:", updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
