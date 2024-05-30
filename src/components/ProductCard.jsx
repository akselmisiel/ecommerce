import React from "react";

const ProductCard = ({ imgSrc, price }) => {
  return (
    <article className="w-[238px] bg-white flex flex-col items-center">
      <img className="w-[239px] h-[427px]" src={imgSrc} alt="Product" />
      <div className="w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center gap-2.5">
        <h2 className="text-center text-slate-800 text-base font-bold font-['Montserrat']">
          Graphic Design
        </h2>
        <p className="text-center text-neutral-500 text-sm font-bold font-['Montserrat']">
          English Department
        </p>
        <div className="flex justify-center items-start gap-[5px]">
          <span className="text-center text-stone-300 text-base font-bold font-['Montserrat'] line-through">
            $16.48
          </span>
          <span className="text-center text-teal-700 text-base font-bold font-['Montserrat']">
            {price}
          </span>
        </div>
        <div className="flex justify-center items-center gap-[6.08px]">
          <span className="w-4 h-4 bg-sky-500 rounded-full" />
          <span className="w-4 h-4 bg-teal-700 rounded-full" />
          <span className="w-4 h-4 bg-orange-400 rounded-full" />
          <span className="w-4 h-4 bg-slate-800 rounded-full" />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
