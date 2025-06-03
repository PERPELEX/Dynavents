import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="poppins w-full px-4 sm:px-8 md:px-16 lg:px-20 flex flex-col py-6 sm:py-8 md:py-10 lg:py-12 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 bg-[#F7F7F7] ">
      {children}
    </div>
  );
};

export default Wrapper;
