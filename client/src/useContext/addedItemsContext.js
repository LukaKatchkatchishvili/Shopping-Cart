import React, { createContext, useContext, useState } from "react";

// Create a context for the addedItems state
const AddedItemsContext = createContext();

// Create a custom hook to use the context
export const useAddedItems = () => useContext(AddedItemsContext);

// Create a provider component to wrap your app and provide the context
export const AddedItemsProvider = ({ children }) => {
  const [cartedItems, setCartedItems] = useState({ items: "" });

  return (
    <AddedItemsContext.Provider value={{ cartedItems, setCartedItems }}>
      {children}
    </AddedItemsContext.Provider>
  );
};
