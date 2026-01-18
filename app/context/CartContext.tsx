import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';
import { ImageSourcePropType } from 'react-native';

// Define the shape of a cart item
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: ImageSourcePropType;
}

export interface Order {
  id: string;
  date: string; // ISO string
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
}

// Define the shape of the context
interface ICartContext {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  orders: Order[];
  placeOrder: () => void;
}

// Create the context
const CartContext = createContext<ICartContext | undefined>(undefined);

// Create the provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (itemToAdd: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        // Increase quantity if item already exists
        return prevItems.map(item =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Add new item with quantity 1
      return [...prevItems, { ...itemToAdd, quantity: 1 }];
    });
  };

  const increaseQuantity = (id: string) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: string) => {
    setItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = useMemo(() => 
    items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  
  const itemCount = useMemo(() => 
      items.reduce((sum, item) => sum + item.quantity, 0),
      [items]
  );

  const placeOrder = () => {
    if (items.length === 0) return;

    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      items: [...items],
      total: total,
      status: 'Pending',
    };

    setOrders(prevOrders => [newOrder, ...prevOrders]);
    clearCart();
  };

  const value = {
    items,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    total,
    itemCount,
    orders,
    placeOrder
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
