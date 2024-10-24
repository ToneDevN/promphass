"use client";

import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ฟังก์ชัน Toggle Menu สำหรับมือถือ
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full p-4 bg-[#cfe6ff]">
      <link rel="icon" href="/images/iconMain.png" type="image/png" />
      <nav className="flex justify-between items-center container mx-auto">
        {/* Logo */}
        <div className="text-5xl font-bold">
          <img src="/images/iconMain.png" alt="icon" className="h-24" />
        </div>

        {/* Hamburger Menu Button สำหรับมือถือ */}
        <div className="lg:hidden">
          <button
            id="menu-btn"
            className="text-[#150e60] focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* เมนูหลัก (Desktop) */}
        <ul className="hidden lg:flex top-0 justify-around items-center text-lg w-full text-[#150e60]">
            <li><a href="/" className="nav-link"><span className="inside-link"><span className="oval-box"></span><span className="oval-box2"></span>หน้าหลัก</span></a></li>
            <li><a href="/service" className="nav-link"><span className="inside-link"><span className="oval-box"></span><span className="oval-box2"></span>งานบริการ</span></a></li>
            <li><a href="/articles" className="nav-link"><span className="inside-link"><span className="oval-box"></span><span className="oval-box2"></span>บทความธุรกิจ</span></a></li>
            <li><a href="/about" className="nav-link"><span className="inside-link"><span className="oval-box"></span><span className="oval-box2"></span>ติดต่อเรา</span></a></li>
            <li><a href="#" className="bg-[#150e60] py-2 px-8 rounded-full text-white">Sign up &ensp;&rarr;</a></li>
        </ul>

        {/* เมนูสำหรับมือถือ */}
        <div
          id="menu"
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-16 right-4 w-2/3 bg-white shadow-lg rounded-xl lg:hidden`}
        >
          <ul className="flex flex-col items-center bg-[#150e60] rounded-xl">
            <li className="min-w-full text-center p-4 shadow-lg hover:bg-blue-500">
              <a href="/" className="text-lg">หน้าหลัก</a>
            </li>
            <li className="min-w-full text-center p-4 shadow-lg hover:bg-blue-500">
              <a href="/service" className="text-lg">งานบริการ</a>
            </li>
            <li className="min-w-full text-center p-4 shadow-lg hover:bg-blue-500">
              <a href="/articles" className="text-lg">บทความธุรกิจ</a>
            </li>
            <li className="min-w-full text-center p-4 shadow-lg hover:bg-blue-500">
              <a href="/about" className="text-lg">ติดต่อเรา</a>
            </li>
            <li className="min-w-full text-center p-4 shadow-lg hover:bg-blue-500">
              <a href="#" className="text-lg">Sign up &ensp;&rarr;</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
