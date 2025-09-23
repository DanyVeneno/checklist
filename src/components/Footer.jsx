import React from "react";
import { AlertCircle } from "lucide-react";

const Footer = () => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 mt-8 text-center'>
      <div className='flex items-center justify-center gap-2 mb-4'>
        <AlertCircle className='text-red-500 w-5 h-5' />
        <span className='text-lg font-semibold text-gray-800'>
          Tu botiquín es tu compañero silencioso de ruta
        </span>
      </div>
      <p className='text-gray-600'>
        Te ayudará en caso de emergencia. Tan completo o esencial como
        consideres correcto, lo importante es siempre estar preparado.
      </p>
    </div>
  );
};

export default Footer;
