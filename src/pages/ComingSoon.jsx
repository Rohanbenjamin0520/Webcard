import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-500">
      <div className="text-center bg-white p-10 rounded-2xl shadow-2xl">
        
        <h1 className="text-5xl font-bold text-pink-600 mb-4">
          🚀 Coming Soon
        </h1>

        <p className="text-gray-600 mb-6">
          We're working on something amazing. Stay tuned!
        </p>

        <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl transition duration-300">
          Notify Me
        </button>

      </div>
    </div>
  );
};

export default ComingSoon;
