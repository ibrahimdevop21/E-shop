// main navigation bar// src/components/Navbar.tsx

'use client'; // Marking the file as a client component

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-blue-500 text-white py-4 px-6 flex justify-between items-center'>
      {/* Logo */}
      <div className='text-2xl font-bold'>
        <Link href='/' className='hover:text-blue-300'>
          MyShop
        </Link>
      </div>

      {/* Toggle Button for Mobile Menu */}
      <button className='md:hidden text-xl' onClick={toggleMenu}>
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Navigation Links */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex space-x-6`}>
        <Link href='/' className='hover:text-blue-300'>
          Home
        </Link>
        <Link href='/products' className='hover:text-blue-300'>
          Products
        </Link>
        <Link href='/about' className='hover:text-blue-300'>
          About
        </Link>
        <Link href='/contact' className='hover:text-blue-300'>
          Contact
        </Link>
      </div>

      {/* Login Button */}
      <button className='bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-100'>
        Login
      </button>
    </nav>
  );
};

export default Navbar;
