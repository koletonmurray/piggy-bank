import React from 'react';
import Header from './Header';
import Footer from './Footer.js';

function Layout({ children }) {
  return (
    <div className="bg-gray-100 flex flex-col">
      <Header />
        <div className="min-h-screen flex flex-col">
          <div className="flex-grow p-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              {children}
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Layout;