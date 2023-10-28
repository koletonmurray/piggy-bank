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
        </div>
    )
}

export default Header;