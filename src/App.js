import React from 'react';
import { WEBSITE_NAME, WEBSITE_DESC, WEBSITE_URLS, BUTTON1, BUTTON2 } from "./config.js";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-100 to-yellow-200 px-6 py-10 md:px-20 md:py-16 flex flex-col items-center">
      
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl mb-6 font-extrabold text-amber-800">{WEBSITE_NAME}</h1>
        <p className="text-base md:text-lg mb-10 text-amber-900">{WEBSITE_DESC}</p>
      </div>

      {/* Multiple Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {WEBSITE_URLS.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Coffee shop ${index + 1}`}
            className="rounded-xl shadow-lg w-full object-cover h-64 md:h-72"
          />
        ))}
      </div>

      <div className="flex justify-center gap-6">
        <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full text-lg">
          {BUTTON1}
        </button>
        <button className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-full text-lg">
          {BUTTON2}
        </button>
      </div>
    </div>
  );
};

export default App;
