import React, { useState } from 'react';
import { useSettings } from '../contexts/SettingsContext';

// Money pngs
import oneDollar from '../img/1dollar.png';
import fiveDollar from '../img/5dollar.png';
import tenDollar from '../img/10dollar.png';
import twentyDollar from '../img/20dollar.png';
import oneCent from '../img/1cent.png';
import fiveCent from '../img/5cent.png';
import tenCent from '../img/10cent.png';
import twentyfiveCent from '../img/25cent.png';
// Import useTotal
import { useTotal } from '../contexts/TotalSavings';
import PageTitle from '../components/PageTitle';

function AddMoney() {
  const { totalSavings, addToTotalSavings } = useTotal(); // Use useTotal hook

  const [totalAdd, setTotalAdd] = useState(0);

  const handleAddMoney = (amount) => {
    setTotalAdd(totalAdd + amount);
  };

  const handleAddToSavings = () => {
    addToTotalSavings(totalAdd);
    setTotalAdd(0); // Reset the local total add
  };

  const { settings } = useSettings();
  const savingsColor = settings.color === 'cottonCandy' ? 'bg-blue-100' : 'bg-brown-200';
  const savingsText = settings.color === 'cottonCandy' ? 'text-green-600' : 'text-green-700';

  return (
    <div className="p-4">
      <PageTitle title={"Add Money to your Savings"} />

      {/* Total Savings Card */}
      <div className="flex justify-center pb-10">
        <div className={`${savingsColor} p-4 rounded-lg shadow-md mb-4 w-[30%]`}>
            <h3 className="text-2xl font-bold">Total Savings</h3>
            <p className={`text-3xl font-bold ${savingsText}`}>${totalSavings.toFixed(2)}</p>
        </div>
      </div>


      <h2 className="text-2xl font-bold mb-4">
        How much money are you adding to your savings?
      </h2>

      {/* Money Images */}
      <div className="flex flex-wrap justify-center space-x-4">
        <MoneyItem value={1} onClick={handleAddMoney} img={oneDollar} />
        <MoneyItem value={5} onClick={handleAddMoney} img={fiveDollar} />
        <MoneyItem value={10} onClick={handleAddMoney} img={tenDollar} />
        <MoneyItem value={20} onClick={handleAddMoney} img={twentyDollar} />
      </div>
      <div className="flex flex-wrap justify-center space-x-4 py-4">
        <MoneyItem value={0.01} onClick={handleAddMoney} img={oneCent} />
        <MoneyItem value={0.05} onClick={handleAddMoney} img={fiveCent} />
        <MoneyItem value={0.1} onClick={handleAddMoney} img={tenCent} />
        <MoneyItem value={0.25} onClick={handleAddMoney} img={twentyfiveCent} />
      </div>

      {/* Total Money Counter */}
      <div className="mt-8 text-2xl font-bold">
        Total to Add to Savings: <span className='text-green-600'>+${totalAdd.toFixed(2)}</span>
      </div>

      <div className="mt-4">
        <button
          onClick={handleAddToSavings}
          className="bg-green-600 p-2 text-white font-bold rounded-md cursor-pointer hover:bg-green-700 mr-2"
        >
          Add to Savings
        </button>
        <button
            onClick={() => setTotalAdd(0)} // Reset the local total to 0
            className="bg-red-500 p-2 text-white font-bold rounded-md cursor-pointer hover:bg-red-600"
        >
        Clear
        </button>

      </div>
    </div>
  );
}

function MoneyItem({ value, onClick, img }) {
  return (
    <button
      onClick={() => onClick(value)}
      className="hover:bg-gray-200 cursor-pointer"
    >
      <img src={img} alt={value} width={'50px'} />
    </button>
  );
}

export default AddMoney;
