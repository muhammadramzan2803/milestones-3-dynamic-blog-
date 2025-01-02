"use client";

import React from 'react';
import Link from 'next/link';  

function Footer() {
  return (
    <footer className="bg-black shadow-sm p-2">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">New Way of Doing Things</h1>
            <p className="mt-2">
              Ready to take your web development skills to the <br /> next level? Join us at TechVerse and uncover the secrets <br /> of web development mastery.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <ul className="list-none flex flex-col md:flex-row md:items-center text-center md:text-left">
              <li className="mr-4 md:mr-8 mb-2 md:mb-0">
                <Link href="/" className="text-[#66FCF1] hover:text-gray-300 transition duration-300">Home</Link>
              </li>
              <li className="mr-4 md:mr-8 mb-2 md:mb-0">
                <Link href="/" className="text-[#66FCF1] hover:text-gray-300 transition duration-300">Blogs</Link>
              </li> 
              <li className="mr-4 md:mr-8 mb-2 md:mb-0">
                <Link href="/about" className="text-[#66FCF1] hover:text-gray-300 transition duration-300">About</Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link href="/techinnovation" className="text-[#66FCF1] hover:text-gray-300 transition duration-300">Timelines</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-2 text-center text-sm text-white">
        <p>© 2024 TechVerse. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;