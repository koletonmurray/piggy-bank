import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSettings } from '../contexts/SettingsContext';

function Header() {
    const { settings, setSettings } = useSettings();
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };
  
    const handleSave = () => {
        setSettings(settings);
        toggleSettings();
    };

    // Define a CSS class for the header based on the selected theme
    const primaryColor = settings.color === 'cottonCandy' ? 'bg-blue-500' : 'bg-green-900';
    const secondaryColor = settings.color === 'cottonCandy' ? 'bg-blue-400' : 'bg-brown-800';

    return (
        <div className={`bg-gray-100 flex flex-col`}>
            <div className={`${primaryColor} text-white py-4 relative text-center font-bold`}>
                
                    <h1 className="text-3xl">
                        <Link to="/">
                            <img
                                src="/pig.png"
                                alt="Cute Pig"
                                className="w-12 h-12 inline-block mr-2 -translate-y-[15%]"
                            />
                            Piggy Bank
                        </Link>
                    </h1>
                
                {settings.color === 'forest' ? (
                    <div className="absolute mt-3 mr-5 h-15 w-15 top-1 right-1 bg-gray-300 text-white p-2 rounded-full cursor-pointer flex items-center justify-center">
                        <Link onClick={toggleSettings}>
                            <img
                                src="/pine.png"
                                alt="Pine"
                                className="w-7 h-7 inline-block -translate-y-[5%]"
                            />
                        </Link>
                    </div>
                ) : (
                    <div className="absolute mt-3 mr-5 h-15 w-15 top-1 right-1 text-white p-2 rounded-full cursor-pointer flex items-center justify-center">
                        <Link onClick={toggleSettings}>
                            <img
                                src="/smile.png"
                                alt="Smile"
                                className="w-7 h-7 inline-block"
                            />
                        </Link>
                    </div>
                )}
            </div>
            <nav className={`${secondaryColor} p-2`}>
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
                    {/* Settings Popup */}
                    <div className="bg-white p-4 rounded-md shadow-md relative w-[500px]">
                        <button onClick={toggleSettings} className="absolute top-2 right-4 text-gray-600 text-2xl cursor-pointer">
                            &#x2716;
                        </button>
                        <h2 className="text-xl font-bold mb-5">Settings</h2>
                        <div className="grid grid-cols-2 gap-6 mb-2">
                            <div className="text-right"> {/* Right-align the labels in the first column */}
                                <label className="mr-2"><b>Theme:</b></label>
                            </div>
                            <div className='text-left'>
                                <label>
                                    <input
                                        type="radio"
                                        name="color"
                                        value="cottonCandy"
                                        checked={settings.color === 'cottonCandy'}
                                        onChange={() => setSettings({ ...settings, color: 'cottonCandy' })}
                                    /> Cotton Candy
                                </label><br />
                                <label>
                                    <input
                                        type="radio"
                                        name="color"
                                        value="forest"
                                        checked={settings.color === 'forest'}
                                        onChange={() => setSettings({ ...settings, color: 'forest' })}
                                    /> Forest
                                </label>
                            </div>
                        </div> <br/>
                        <div className='grid grid-cols-2 gap-6'>
                            <div className="text-right"> {/* Right-align the labels in the first column */}
                                <label className="mr-2 font-bold">Savings Goal:</label>
                            </div>
                            <div className='text-left'>
                                <label>
                                    <input
                                        type="radio"
                                        name="goal"
                                        value="item"
                                        checked={settings.goal === 'item'}
                                        onChange={() => setSettings({ ...settings, goal: 'item' })}
                                    /> Save by Item
                                </label><br />
                                <label className=''>
                                    <input
                                        type="radio"
                                        name="goal"
                                        value="numeric"
                                        checked={settings.goal === 'numeric'}
                                        onChange={() => setSettings({ ...settings, goal: 'numeric' })}
                                    /> Save by Amount
                                </label>
                            </div>
                        </div>

                        <button onClick={handleSave} className="mt-2 bg-blue-500 text-white p-2 rounded-md cursor-pointer">
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header;
