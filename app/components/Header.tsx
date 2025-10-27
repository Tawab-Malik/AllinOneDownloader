'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
export default function HeaderNew() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-gray-900 text-white py-2 md:py-6">
            <div className="max-w-6xl mx-auto px-2 md:px-6 flex justify-between items-center">
                {/* Logo or Title */}
                <Link href="/">
                    <Image src="/images/allinone.png" className=' ' height={100} width={200} alt='logo' />
                </Link>


                {/* Mobile Menu Toggle */}

                {/* Navigation Links */}
                <div>
                    <button
                        className="lg:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
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
                    <nav className='hidden xl:block'>
                        <ul className="lg:flex space-x-6">
                            <li>
                                <Link href="/" passHref>
                                    <p className="hover:text-blue-500 text-xl">Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" passHref>
                                    <p className="hover:text-blue-500 text-xl">About</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" passHref>
                                    <p className="hover:text-blue-500 text-xl">Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

            {/* Mobile Menu with smooth left-to-right slide animation */}
            <motion.div
                className={`lg:hidden bg-gray-900 p-4 absolute z-50 top-0 left-0 w-full h-full`}
                initial={{ x: '-100%' }}
                animate={{ x: isMenuOpen ? 0 : '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >

                <div className="flex relative justify-between items-center">
                    {/* Close Button */}
                    <button
                        className="text-white absolute top-1 right-5 text-3xl"
                        onClick={closeMenu}
                    >
                        &times;
                    </button>
                </div>
                <Image src="/images/allinone.png" className=' ' height={100} width={200} alt='logo' />

                <ul className="mt-6">
                    <li>
                        <Link href="/" passHref>
                            <p className="text-white text-xl py-2 hover:text-blue-500">Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" passHref>
                            <p className="text-white text-xl py-2 hover:text-blue-500">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" passHref>
                            <p className="text-white text-xl py-2 hover:text-blue-500">Contact</p>
                        </Link>
                    </li>
                </ul>
            </motion.div>
        </header>
    );
}
