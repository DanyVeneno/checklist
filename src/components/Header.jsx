import React from "react";
import ProgressBar from "./ProgressBar";
import { Moon, Sun } from 'lucide-react';

const Header = ({ progress, checkedCount, totalItems, darkMode, setDarkMode }) => {
  return (
    <div className='bg-white shadow-lg border-b-4 border-red-500'>
      <div className='max-w-4xl mx-auto px-6 py-8'>
        <div className='text-center mb-6'>
          <h1 className='text-4xl font-bold text-gray-800 mb-2'>
            LIBRES Y VIAJEROS
          </h1>
          <p className='text-lg text-gray-600 font-medium'>
            <a
              href='https://www.instagram.com/libresyviajeros'
              target='_blank'
              rel='noopener noreferrer'
            >
              @betornillo / Tu Guia de Confianza
            </a>
          </p>
          <h2 className='text-2xl font-semibold text-red-600 mt-4'>
            Check-List de Botiquín de Primeros Auxilios
          </h2>
          <p className='text-gray-600 mt-2'>
            Arma tu botiquín con esta guía personalizable para continuar la
            aventura
          </p>
        </div>
        <ProgressBar
          progress={progress}
          checkedCount={checkedCount}
          totalItems={totalItems}
        />
        <div className="mt-4 text-right">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700"
            aria-pressed={darkMode}
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="text-sm text-gray-700 dark:text-gray-200">{darkMode ? 'Claro' : 'Oscuro'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
