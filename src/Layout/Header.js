import React from 'react';

function Header(){

    return(
        <div className='bg-gray-100 flex flex-col'>
            <div className=" bg-blue-500 text-white py-4 relative text-center font-bold">
                <a href='/'>
                <h1 className="text-3xl">
                    <img
                    src="/pig.png"
                    alt="Cute Pig"
                    className="w-12 h-12 inline-block mr-2 -translate-y-[15%]"
                    />
                    Piggy Bank
                </h1>
                </a>
            </div>
            <nav className="bg-blue-400 p-2">
                <ul className="flex justify-center space-x-10 font-bold text-lg">
                    <li>
                        <a href='/' className='text-white'>Home</a>
                    </li>
                    <li>
                        <a href="/savings" className="text-white">Savings</a>
                    </li>
                    <li>
                        <a href="/add-money" className="text-white">Add Money</a>
                    </li>
                    <li>
                        <a href="/spending" className="text-white">Spending</a>
                    </li>
                    <li>
                        <a href='/learn' className='text-white'>Learn</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;