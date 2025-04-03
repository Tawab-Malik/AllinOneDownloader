import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Image src="/images/allinone.png" className=' max-w-[300px] mx-auto' height={100} width={200} alt='logo' />
        {/* Dynamic Year */}
        <p className='pt-2'>&copy; {currentYear} AllinOne Downloader. All Rights Reserved.</p>
        
        {/* Social Media Links */}
        <div className="flex  justify-center space-x-6 mt-4">
          <Link
            href="https://www.instagram.com/taw_abmalik?igsh=dGs5ZTljZnZiYXds"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdul-tawab-78ab9525b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={24} />
          </Link>
          <Link
            href="mailto:tchannar5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaEnvelope size={24} />
          </Link>
          <Link
            href="https://tawabmalikx-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaGlobe size={24} />
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-4">Follow us on social media!</p>
      </div>
    </footer>
  );
};

export default Footer;
