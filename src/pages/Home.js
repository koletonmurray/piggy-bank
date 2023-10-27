import React from 'react';
import { useTotal } from '../contexts/TotalSavings';
import PageTitle from '../components/PageTitle';
import { useSettings } from '../contexts/SettingsContext';

function Home() {
  const { totalSavings, savedItems } = useTotal();
  const { settings } = useSettings();

  // Calculate the total target savings
  const totalTargetSavings = savedItems.reduce((acc, item) => acc + parseFloat(item.price), 0);

  const savingsColor = settings.color === 'cottonCandy' ? 'bg-blue-100' : 'bg-brown-200';
  const savingsText = settings.color === 'cottonCandy' ? 'text-green-600' : 'text-green-700';
  const goalColor = settings.color === 'cottonCandy' ? 'bg-pink-100' : 'bg-yellow-100';
  const goalText = settings.color === 'cottonCandy' ? 'text-blue-500' : 'text-yellow-600';


  return (
    <>
      <PageTitle title={'Welcome to the Piggy Bank app!'} subtitle={'Learn to manage your money wisely.'}/>

      {/* Flex container for Total Savings and Target Savings cards */}
      <div className="flex justify-center gap-4 mb-4">
        {/* Total Savings Card */}
        <div className="w-[25%]">
          <div className={`${savingsColor} p-4 rounded-lg shadow-md mb-4`}>
            <h3 className="text-2xl font-bold">Total Savings</h3>
            <p className={`text-3xl font-bold ${savingsText}`}>${totalSavings.toFixed(2)}</p>
          </div>
        </div>

        {/* Savings Goal Card */}
        <div className="w-[25%]">
          <div className={`${goalColor} p-4 rounded-lg shadow-md mb-4`}>
            <h3 className="text-2xl font-bold">Savings Goal</h3>
            <p className={`text-3xl font-bold ${goalText}`}>${totalTargetSavings.toFixed(2)}</p>
          </div>
        </div>
      </div>

    {/* Difference Card (on its own row) */}
    <div className='flex justify-center'>
      {totalTargetSavings - totalSavings < 0 ? (
        <div className="bg-green-100 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-bold">Leftover Savings</h3>
          <p className="text-3xl font-bold text-green-600 p-1">
            ${Math.abs(totalTargetSavings - totalSavings).toFixed(2)}
          </p>
          <p className="text-lg">
            Congratulations! You've met your savings goal.
          </p>
        </div>
      ) : (
        <div className="bg-red-100 p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-2xl font-bold">You Still Need to Save</h3>
          <p className="text-3xl font-bold text-red-600 p-1">
            ${(totalTargetSavings - totalSavings).toFixed(2)}
          </p>
          <p className="text-lg">
            Keep saving to reach your goal.
          </p>
        </div>
      )}
    </div>
  </>
  );
};

export default Home;
