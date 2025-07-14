'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut" as const
    }
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
      className="bg-white shadow-md fixed w-full top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <motion.div 
                className="w-8 h-8 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
               <img src="assets/Logo.png" alt="" className='min-w-16' />
              </motion.div>
              <span className="ml-2 text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>Dontorrir</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <motion.div variants={navItemVariants}>
              <Link href="#home" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors" style={{ '--tw-text-opacity': '1', '--tw-hover-text-opacity': '1' } as React.CSSProperties}>
                Início
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#services" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors" style={{ '--tw-text-opacity': '1', '--tw-hover-text-opacity': '1' } as React.CSSProperties}>
                Serviços
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors" style={{ '--tw-text-opacity': '1', '--tw-hover-text-opacity': '1' } as React.CSSProperties}>
                Sobre Nós
              </Link>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <Link href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors" style={{ '--tw-text-opacity': '1', '--tw-hover-text-opacity': '1' } as React.CSSProperties}>
                Contato
              </Link>
            </motion.div>
          </nav>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            variants={navItemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="https://wa.me/5581998921500"
                target="_blank"
                className="flex text-white w-full px-6 py-3 rounded-xl text-sm font-semibold duration-300 shadow-lg"
                style={{ backgroundColor: 'var(--color-secondary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-secondary)'}
              >
                <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  Agendar Consulta
                </span>
                  </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            variants={navItemVariants}
          >
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <motion.div 
          className="md:hidden"
          variants={mobileMenuVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="#home" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors">
                Início
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="#services" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors">
                Serviços
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="#about" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors">
                Sobre Nós
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="#contact" className="text-gray-700 hover:text-green-600 block px-3 py-2 text-base font-medium transition-colors">
                Contato
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="https://wa.me/5581998921500"
                target="_blank"
                className="group relative overflow-hidden text-white block px-3 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg"
                style={{ backgroundColor: 'var(--color-primary)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Agendar Consulta
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
} 