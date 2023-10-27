import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header(){
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return(
        <div className="bg-gray-100 flex flex-col">
            <div className="bg-blue-500 text-white py-4 relative text-center font-bold">
                <Link to="/">
                <h1 className="text-3xl">
                    <img
                    src="/pig.png"
                    alt="Cute Pig"
                    className="w-12 h-12 inline-block mr-2 -translate-y-[15%]"
                    />
                    Piggy Bank
                </h1>
                </Link>
                <div className="absolute top-5 right-6 bg-blue-500 text-white p-2 rounded-full cursor-pointer">
                    <Link onClick={toggleSettings}>
                        <img
                        src="/smile.png"
                        alt="Cute Pig"
                        className="w-7 h-7 inline-block mr-2 -translate-y-[15%]"
                        />
                    </Link>
                </div>
            </div>
            <nav className="bg-blue-400 p-2">
                <ul className="flex justify-center space-x-10 font-bold text-lg">
                    <li>
                        <Link to='/' className='text-white'>Home</Link>
                    </li>
                    <li>
                        <Link to="/savings" className="text-white">Savings Goal</Link>
                    </li>
                    <li>
                        <Link to="/add-money" className="text-white">Add Money</Link>
                    </li>
                    <li>
                        <Link to="/spending" className="text-white">Spending</Link>
                    </li>
                    <li>
                        <Link to='/learn' className='text-white'>Learn</Link>
                    </li>
                </ul>
            </nav>
            {isSettingsOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md shadow-md relative w-[500px]">
                        <button onClick={toggleSettings} className="absolute top-2 right-4 text-gray-600 text-2xl cursor-pointer">
                        &#x2716;
                        </button>
                        <h2 className="text-xl font-bold mb-2">Settings</h2>
                        <div className="mb-2">
                        <label className="mr-2">Color:</label>
                        <label>
                            <input type="radio" name="color" value="cottonCandy" defaultChecked /> Cotton Candy &nbsp;
                        </label>
                        <label>
                            <input type="radio" name="color" value="forest" /> Forest
                        </label>
                        </div>
                        <div>
                        <label className="mr-2">Savings Goal:</label>
                        <label>
                            <input type="radio" name="goal" value="byItem" defaultChecked /> By Item &nbsp;
                        </label>
                        <label>
                            <input type="radio" name="goal" value="setGoal" /> Set Savings Goal
                        </label>
                        </div>
                        <button onClick={toggleSettings} className="mt-2 bg-blue-500 text-white p-2 rounded-md cursor-pointer">
                        Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;