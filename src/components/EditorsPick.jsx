import React from "react";

const EditorsPick = () => {
  return (
    <section className="w-full bg-neutral-50 px-8 py-20 flex flex-col items-center">
      <div className="text-center mb-12 ">
        <h2 className="text-slate-800 text-2xl font-bold font-['Montserrat']">
          EDITOR’S PICK
        </h2>
        <p className="text-neutral-500 text-sm font-normal font-['Montserrat']">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:flex-row">
        {/* Men Section */}
        <div className="relative bg-white flex justify-center items-center overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co/q0jyFrP/filter.png"
            alt="Men"
          />
          <div className="absolute bottom-0 bg-white bg-opacity-75 w-full py-3 text-center text-slate-800 text-base font-bold font-['Montserrat']">
            MEN
          </div>
        </div>

        {/* Women Section */}
        <div className="relative bg-white flex justify-center items-center overflow-hidden sm:flex-grow">
          <img
            className="w-full h-full object-cover"
            src="https://i.ibb.co/PYrhHzn/filter-1.png"
            alt="Women"
          />
          <div className="absolute bottom-0 bg-white bg-opacity-75 w-full py-3 text-center text-slate-800 text-base font-bold font-['Montserrat']">
            WOMEN
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 ">
          {/* Accessories Section */}
          <div className="relative bg-white flex justify-center items-center overflow-hidden sm:flex-grow">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/3hqpBy1/filter-2.png"
              alt="Accessories"
            />
            <div className="absolute bottom-0 bg-white bg-opacity-75 w-full py-3 text-center text-slate-800 text-base font-bold font-['Montserrat']">
              ACCESSORIES
            </div>
          </div>

          {/* Kids Section */}
          <div className="relative bg-white flex justify-center items-center overflow-hidden sm:flex-grow">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co/R0yptwQ/filter-3.png"
              alt="Kids"
            />
            <div className="absolute bottom-0 bg-white bg-opacity-75 w-full py-3 text-center text-slate-800 text-base font-bold font-['Montserrat']">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
