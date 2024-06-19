import { createContext, useReducer } from "react";
import { storeReducer, initialState } from "./Reducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToCart = (productId) => {
    const updatedCart = [...state.products, productId];
    updatePrice(updatedCart);
    dispatch({ type: "add", payload: updatedCart });
  };

  const removeToCart = (productId) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.id !== productId
    );
    updatePrice(updatedCart);
    dispatch({ type: "remove", payload: updatedCart });
  };

  const updatePrice = (products) => {
    let totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
    dispatch({ type: "update", payload: totalPrice });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeToCart,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
