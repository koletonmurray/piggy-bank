import React, { useState } from 'react';
import { useTotal } from '../TotalSavings/TotalSavings';
import PageTitle from '../components/PageTitle';

function Savings() {
  const { savedItems, addSavedItem, removeSavedItem, updateSavedItem } = useTotal();
  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedIndex, setUpdatedIndex] = useState(null);

  const handleAddItem = () => {
    if (newItem && newPrice) {
      const price = parseFloat(newPrice).toFixed(2);
      addSavedItem(newItem, price);
      setNewItem('');
      setNewPrice('');
    }
  };

  const handleRemoveItem = (index) => {
    removeSavedItem(index);
  };

  const handleEditItem = (index) => {
    setUpdatedIndex(index);
    setUpdatedName(savedItems[index].item);
    setUpdatedPrice(savedItems[index].price);
    setIsEditing(true);
  };

  const handleUpdateItem = () => {
    if (updatedName && updatedPrice) {
      const price = parseFloat(updatedPrice).toFixed(2);
      updateSavedItem(updatedIndex, { item: updatedName, price });
      setUpdatedIndex(null);
      setUpdatedName('');
      setUpdatedPrice('');
      setIsEditing(false);
    }
  };

  const canAddMoreItems = savedItems.length < 3; // Check if you can add more items
  const totalTargetSavings = savedItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <div className="p-4">
      <PageTitle title={'Savings Goal'}/>

      {/* Flex container for Total Savings and Target Savings cards */}
      <div className="flex justify-center gap-4 mb-4">
        {/* Savings Goal Card */}
        <div className="w-[30%]">
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-2xl font-bold">Target Savings</h3>
            <p className="text-3xl font-bold text-yellow-600">${totalTargetSavings.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Item Entry */}
      <div/>
      {canAddMoreItems && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter the item you are going to save for..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="p-3 w-[350px] rounded-md border shadow-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <input
            type="number"
            step="0.01"
            placeholder="Price..."
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            className="ml-2 p-3 w-[100px] rounded-md border shadow-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={isEditing ? handleUpdateItem : handleAddItem}
            className={`${
              isEditing ? 'bg-yellow-500' : 'bg-blue-500'
            } p-2 text-white font-bold rounded-md cursor-pointer ml-2`}
          >
            {isEditing ? 'Update' : 'Add Item'}
          </button>
        </div>
      )}

      {/* List of Saved Items */}
      {savedItems.length > 0 && (
        <div className="mb-4">
          <h3 className="text-xl font-bold">Items I'm Saving For:</h3>
          <table className="w-[60%] mx-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 font-bold text-center">Item</th>
                <th className="py-2 px-4 font-bold text-center">Price</th>
                <th className="py-2 px-4 font-bold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {savedItems.map((item, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-2 px-4">
                    {isEditing && updatedIndex === index ? (
                      <input
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        className="w-full rounded-md"
                      />
                    ) : (
                      item.item
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {isEditing && updatedIndex === index ? (
                      <input
                        type="number"
                        step="0.01"
                        value={updatedPrice}
                        onChange={(e) => setUpdatedPrice(e.target.value)}
                        className="w-full rounded-md"
                      />
                    ) : (
                      `$${item.price}`
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {isEditing && updatedIndex === index ? (
                      <button
                        onClick={handleUpdateItem}
                        className="bg-yellow-500 p-2 text-white font-bold rounded-md cursor-pointer"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditItem(index)}
                        className="bg-blue-500 p-2 text-white font-bold rounded-md cursor-pointer"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="bg-red-500 p-2 text-white font-bold rounded-md cursor-pointer ml-2"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {savedItems.length === 3 && (
        <p className="text-center text-red-500 font-bold">Note: You can add up to three items to your saved list.</p>
      )}
    </div>
  );
}

export default Savings;
