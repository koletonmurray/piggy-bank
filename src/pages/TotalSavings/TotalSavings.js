import React, { createContext, useContext, useState } from 'react';

const TotalSavingsContext = createContext();

export function TotalSavingsProvider({ children }) {
  const [totalSavings, setTotalSavings] = useState(0);
  const [savedItems, setSavedItems] = useState([]); // Modify to store objects with item and price

  const addToTotalSavings = (amount) => {
    setTotalSavings(totalSavings + amount);
  };

  const addSavedItem = (item, price) => {
    const newItem = { item, price };
    setSavedItems([...savedItems, newItem]);
  };

  const removeSavedItem = (index) => {
    const updatedItems = [...savedItems];
    updatedItems.splice(index, 1);
    setSavedItems(updatedItems);
  };

  const updateSavedItem = (index, updatedItem) => {
    const updatedItems = [...savedItems];
    updatedItems[index] = updatedItem;
    setSavedItems(updatedItems);
  };

  return (
    <TotalSavingsContext.Provider
      value={{
        totalSavings,
        addToTotalSavings,
        savedItems,
        addSavedItem,
        removeSavedItem,
        updateSavedItem,
      }}
    >
      {children}
    </TotalSavingsContext.Provider>
  );
}

export function useTotal() {
  return useContext(TotalSavingsContext);
}
