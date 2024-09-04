"use client";
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 fixed w-full top-0 shadow-md">
      <nav className="flex justify-between items-center">
        
        <img 
          src='/logoHamburgueria.ico' 
          alt="Logo Hamburgueria" 
          className="h-10 w-10 md:h-14 md:w-26 lg:h-18 lg:w-20" 
        />
        
        <ul className="flex space-x-8">
          <li>
            <Link
              to="combos"
              smooth={true}
              duration={500}
              offset={-70} // Adjusts the final position if necessary
            >
              <motion.span
                whileHover={{ scale: 1.1 }} // Animation on hover
                whileTap={{ scale: 0.95 }} // Animation on tap
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
              >
                Combos
              </motion.span>
            </Link>
          </li>
          <li>
            <Link
              to="cardapio"
              smooth={true}
              duration={500}
              offset={-70}
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
              >
                Cardápio
              </motion.span>
            </Link>
          </li>
          <li>
            <a 
              href="https://wa.me/+553491688022" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaWhatsapp className="text-green-500" size={24} />
              </motion.div>
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}
