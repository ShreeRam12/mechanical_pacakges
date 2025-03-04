import React from "react";

const Miles = () => {
  return (
    <div className="milesbg relative w-full h-[500px] bg-cover bg-center">
      {/* Overlay to darken the image for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content inside the banner */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold">
          Miles Section for Mechanical Packages
        </h1>
        <p className="mt-4 text-lg">
          Explore the best mechanical packages designed to improve efficiency,
          performance, and reliability.
        </p>
        <a href="#contact-form">
          <button className="mt-6 px-6 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default Miles;
