import React, { useState } from 'react';
import { useTotal } from '../contexts/TotalSavings';
import PageTitle from '../components/PageTitle';
import { useSettings } from '../contexts/SettingsContext';
import clothing from '../img/clothing.png';
import electronics from '../img/electronic.png';
import toy from '../img/toy.png'
import game from '../img/game.png'
import general from '../img/general.png'
import other from '../img/other.png'
import food from '../img/food.png'

function Savings() {
  
  const categoryImages = {
    Electronics: electronics,
    Toy: toy,
    Game: game,
    Clothing: clothing,
    Food: food,
    'General Savings': general,
    Other: other,
  };

  const categoryOptions = ['Electronics', 'Toy', 'Game', 'Clothing', 'Food', 'General Savings', 'Other'];
  const { savedItems, addSavedItem, removeSavedItem, updateSavedItem, numericGoal, updateNumericGoal, removeNumericGoal } = useTotal();
  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [goal, setGoal] = useState('');
  const [updatedGoal, setUpdatedGoal] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');
  const [updatedIndex, setUpdatedIndex] = useState(null);
  const [newCategory, setNewCategory] = useState(categoryOptions[0]);
  const [updatedCategory, setUpdatedCategory] = useState(categoryOptions[0]);


  const handleAddItem = () => {
    if (newItem && newPrice && newCategory) {
      const price = parseFloat(newPrice).toFixed(2);
      addSavedItem(newItem, price, newCategory);
      setNewItem('');
      setNewPrice('');
      setNewCategory('');
    }
  };

  const handleRemoveItem = (index) => {
    removeSavedItem(index);
  };

  const handleEditItem = (index) => {
    setUpdatedIndex(index);
    setUpdatedName(savedItems[index].item);
    setUpdatedPrice(savedItems[index].price);
    setUpdatedCategory(savedItems[index].category);
    setIsEditing(true);
  };

  const handleUpdateItem = () => {
    if (updatedName && updatedPrice && updatedCategory) {
      const price = parseFloat(updatedPrice).toFixed(2);
      updateSavedItem(updatedIndex, { item: updatedName, price, category : updatedCategory });
      setUpdatedIndex(null);
      setUpdatedName('');
      setUpdatedPrice('');
      setUpdatedCategory(''); //Reset the category input
      setIsEditing(false);
    }
  };
  
  const handleSetNumericGoal = () => {
    if (goal) {
      const newGoal = (parseFloat(goal)).toFixed(2);
      updateNumericGoal(newGoal);
      setGoal('');
    }
  };
  
  const handleEditNumericGoal = () => {
    setIsEditing(true);
    setUpdatedGoal(numericGoal);
  };

  const handleUpdateNumericGoal = () => {
    if (updatedGoal) {
      const newGoal = parseFloat(updatedGoal).toFixed(2);
      updateNumericGoal(newGoal);
      setGoal('');
      setIsEditing(false);
    }
  };

  const handleRemoveNumericGoal = () => {
    removeNumericGoal();
    setIsEditing(false);
  };

  const canAddMoreItems = savedItems.length < 3; // Check if you can add more items
  const totalTargetSavings = savedItems.reduce((acc, item) => acc + (item.price ? parseFloat(item.price) : 0), 0);

  const { settings } = useSettings();
  const goalColor = settings.color === 'cottonCandy' ? 'bg-pink-100' : 'bg-yellow-100';
  const goalText = settings.color === 'cottonCandy' ? 'text-blue-500' : 'text-yellow-600';

  return (
    <div className="p-4">
      <PageTitle title={'Create Your Savings Goal'}/>

      <div>
        {/* Flex container for Total Savings and Target Savings cards */}
        <div className="flex justify-center gap-4 mb-4">
          {/* Savings Goal Card (Always Displayed) */}
          <div className="w-[30%]">
            <div className={`p-4 rounded-lg shadow-md mb-4 ${goalColor}`}>
              <h3 className="text-2xl font-bold">Target Savings</h3>
              <p className={`text-3xl font-bold ${goalText}`}>
                {settings.goal === 'item' ? `$${totalTargetSavings.toFixed(2)}` : `$${numericGoal}`}
              </p>
            </div>
          </div>
        </div>

        {settings.goal === 'item' ? (
          <div>
            {/* SECTION FOR ITEMIZED GOAL */}
            {canAddMoreItems && (
              <div className="mb-4 pb-5">
                <p className='text-xl pb-2'>What item(s) are you saving for?</p>
                <input
                  type="text"
                  placeholder="Name of the item..."
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  className="p-3 w-[350px] rounded-md border shadow-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="ml-2 p-3 rounded-md border shadow-md focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select a Category</option>
                  {categoryOptions.map((category, categoryIndex) => (
                <option key={categoryIndex} value={category}>
                  {category}
                </option>
              ))}
            </select>

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
                  className={`bg-blue-500 p-2 text-white font-bold rounded-md cursor-pointer ml-2`}
                >
                  Add Item
                </button>
              </div>
            )}

            {/* List of Saved Items (Only displayed when goal is item) */}
            {savedItems.length > 0 && (
              <div className="mb-4">
                <h3 className="text-2xl font-semibold pb-5">Items I'm Saving For:</h3>
                <table className="w-[60%] mx-auto border-collapse border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 font-bold text-center">Item</th>
                      <th className="py-2 px-4 font-bold text-center">Category</th>
                      <th className="py-2 px-4 font-bold text-center">Price</th>
                      <th className="py-2 px-4 font-bold text-center">Image</th>
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
                              className="rounded-md border border-yellow-500"
                            />
                          ) : (
                            item.item
                          )}
                        </td>
                        <td className="py-2 px-4">
                          {isEditing && updatedIndex === index ? (
                            <select
                              value={updatedCategory}
                              onChange={(e) => setUpdatedCategory(e.target.value)}
                              className="rounded-md border border-yellow-500"
                            >
                              {categoryOptions.map((category, categoryIndex) => (
                                <option key={categoryIndex} value={category}>
                                  {category}
                                </option>
                            ))}
                          </select>
                          ) : (
                            item.category
                          )}
                        </td>
                        <td className="py-2 px-4">
                          {isEditing && updatedIndex === index ? (
                            <input
                              type="number"
                              step="0.01"
                              value={updatedPrice}
                              onChange={(e) => setUpdatedPrice(e.target.value)}
                              className="rounded-md border border-yellow-500"
                            />
                          ) : (
                            `$${item.price}`
                          )}
                        </td>
                        <td className="py-2 px-4 text-center">
                          {categoryImages[item.category] && (
                            <img
                              src={categoryImages[item.category]}
                              alt={item.category}
                              className="w-12 h-12 mx-auto"
                            />
                          )}
                        </td>
                        <td className="py-2 px-4">
                          {isEditing && updatedIndex === index ? (
                            <button
                              onClick={handleUpdateItem}
                              className="bg-green-500 p-2 text-white font-bold rounded-md cursor-pointer"
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
        ) : (
          <div>
            {/* SECTION FOR NUMERIC GOAL */}
            {numericGoal === 0 && (
              <div className="mb-4 pb-5">
                <p className='text-xl pb-2'>How much would you like to save up?</p>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Amount..."
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="p-3 w-[350px] rounded-md border shadow-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                  onClick={handleSetNumericGoal}
                  className={`bg-blue-500 p-2 text-white font-bold rounded-md cursor-pointer ml-2`}
                >
                  Create Goal
                </button>
              </div>
            )}

            {numericGoal > 0 && (
            <div className="">
              {/* Numeric goal section (Only displayed when goal is numeric) */}
              <div className="mb-4">
                <h3 className="text-2xl font-semibold pb-5">My savings goal:</h3>
                  <table className="w-[60%] mx-auto border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 font-bold text-center">Amount</th>
                        <th className="py-2 px-4 font-bold text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="py-2 px-4">
                          {isEditing ? (
                            <input
                              type="number"
                              step="0.01"
                              value={updatedGoal}
                              onChange={(e) => setUpdatedGoal(e.target.value)}
                              className="rounded-md border border-yellow-500"
                            />
                          ) : (
                            `$${numericGoal}`
                          )}
                        </td>
                        <td className="py-2 px-4">
                          {isEditing ? (
                            <button
                              onClick={handleUpdateNumericGoal}
                              className="bg-green-500 p-2 text-white font-bold rounded-md cursor-pointer"
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              onClick={() => handleEditNumericGoal()}
                              className="bg-blue-500 p-2 text-white font-bold rounded-md cursor-pointer"
                            >
                              Edit
                            </button>
                          )}
                          <button
                            onClick={() => handleRemoveNumericGoal()}
                            className="bg-red-500 p-2 text-white font-bold rounded-md cursor-pointer ml-2"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Savings;
