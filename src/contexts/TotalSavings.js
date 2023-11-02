import React, { createContext, useContext, useState } from 'react';

const TotalSavingsContext = createContext();

export function TotalSavingsProvider({ children }) {
  const [totalSavings, setTotalSavings] = useState(0);
  const [savedItems, setSavedItems] = useState([]);
  const [numericGoal, setNumericGoal] = useState(0);

  const addToTotalSavings = (amount) => {
    setTotalSavings(totalSavings + amount);
  };

  const subtractFromTotalSavings = (amount) => {
    setTotalSavings(totalSavings - amount);
  };

  const addSavedItem = (item, price, category) => {
    const newItem = { item, price, category };
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

  const updateNumericGoal = (goal) => {
    setNumericGoal(goal);
  };

  const removeNumericGoal = () => {
    setNumericGoal(0);
  };

  return (
    <TotalSavingsContext.Provider
      value={{
        totalSavings,
        addToTotalSavings,
        subtractFromTotalSavings,
        savedItems,
        addSavedItem,
        removeSavedItem,
        updateSavedItem,
        numericGoal,
        updateNumericGoal,
        removeNumericGoal,
      }}
    >
        {children}
    </TotalSavingsContext.Provider>
  );
}

export function useTotal() {
  return useContext(TotalSavingsContext);
}