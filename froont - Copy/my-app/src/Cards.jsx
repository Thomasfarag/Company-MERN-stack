import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import the Tailwind CSS
function Cards() {
  return (
   <>
   <div className ="container mx-auto px-4 py-8 max-w-md">
    <div className ="grid grid-cols-4 gap-4">
      
      <div className ="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white">
        <h2 className ="text-xl font-semibold mb-2">Tarjeta 1</h2>
        <p className= "text-gray-200">Contenido de la tarjeta 1...</p>
      </div>

      
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-2">Tarjeta 2</h2>
        <p className="text-gray-200">Contenido de la tarjeta 2...</p>
      </div>

      
      <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-2">Tarjeta 3</h2>
        <p className="text-gray-200">Contenido de la tarjeta 3...</p>
      </div>

      
      <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
        <h2 className="text-xl font-semibold mb-2">Tarjeta 4</h2>
        <p className="text-gray-200">Contenido de la tarjeta 4...</p>
      </div>
    </div>
  </div>
   
   
   </>
  )
}

export default Cards
