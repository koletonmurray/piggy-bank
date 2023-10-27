import React, { useState } from 'react';

// Money pngs
import oneDollar from '../../img/1dollar.png';
import fiveDollar from '../../img/5dollar.png';
import tenDollar from '../../img/10dollar.png';
import twentyDollar from '../../img/20dollar.png';
import oneCent from '../../img/1cent.png';
import fiveCent from '../../img/5cent.png';
import tenCent from '../../img/10cent.png';
import twentyfiveCent from '../../img/25cent.png';

// Import useTotal
import { useTotal } from '../TotalSavings/TotalSavings';
  

// Import money pngs
import sub1d from '../../img/sub1d.png'
import sub5d from '../../img/sub5d.png'
import sub10d from '../../img/sub10d.png'
import sub20d from '../../img/sub20d.png'
import sub1c from '../../img/sub1c.png'
import sub5c from '../../img/sub5c.png'
import sub10c from '../../img/sub10c.png'
import sub25c from '../../img/sub25c.png'

function Spending() {

  const { totalSavings, subtractFromTotalSavings } = useTotal(); // Use useTotal hook

  const [totalSubtract, setTotalSubtract] = useState(0);

  const handleSubtractMoney = (amount) => {
    setTotalSubtract(totalSubtract + amount);
  };

  const handleSubtractFromSavings = () => {
    subtractFromTotalSavings(totalSubtract);
    setTotalSubtract(0); // Reset the local total add
  };
  return (
     <div className="p-4">
      {/* Total Savings Card */}
      <div className="flex justify-center py-5 pb-10">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md mb-4 w-[30%]">
            <h3 className="text-2xl font-bold">Total Savings</h3>
            <p className="text-3xl font-bold text-green-600">${totalSavings.toFixed(2)}</p>
        </div>
      </div>


      <h2 className="text-2xl font-bold mb-4">
        How much money are you spending?
      </h2>

      {/* Money Images */}
      <div className="flex flex-wrap justify-center space-x-4">
        <MoneyItem value={1} onClick={handleSubtractMoney} img={oneDollar} />
        <MoneyItem value={5} onClick={handleSubtractMoney} img={fiveDollar} />
        <MoneyItem value={10} onClick={handleSubtractMoney} img={tenDollar} />
        <MoneyItem value={20} onClick={handleSubtractMoney} img={twentyDollar} />
      </div>
      <div className="flex flex-wrap justify-center space-x-4 py-4">
        <MoneyItem value={0.01} onClick={handleSubtractMoney} img={oneCent} />
        <MoneyItem value={0.05} onClick={handleSubtractMoney} img={fiveCent} />
        <MoneyItem value={0.1} onClick={handleSubtractMoney} img={tenCent} />
        <MoneyItem value={0.25} onClick={handleSubtractMoney} img={twentyfiveCent} />
      </div>

      {/* Total Money Counter */}
      <div className="mt-8 text-2xl font-bold">
        Total to Subtract from Savings: ${totalSubtract.toFixed(2)}
      </div>

      <div className="mt-4">
        <button
          onClick={handleSubtractFromSavings}
          className="bg-green-500 p-2 text-white font-bold rounded-md cursor-pointer hover:bg-green-600 mr-2"
        >
          Subtract from Savings
        </button>
        <button
            onClick={() => setTotalSubtract(0)} // Reset the local total to 0
            className="bg-red-500 p-2 text-white font-bold rounded-md cursor-pointer hover-bg-red-600"
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

export default Spending;