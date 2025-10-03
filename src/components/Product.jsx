import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import Heading from "./Heading";

const Product = ({productImg, productBadge, title, price}) => {
  return (
    <>
      <div className="relative group bg-gray-50 h-[350px] flex flex-col justify-between ">
        <Image imgSrc={productImg}/>
        <Badge badgeText={productBadge} className={"absolute top-2 left-2"} />
        {/* Black overlay on hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-10 pointer-events-none"></div>
        <div className="bg-white py-[25px] pb-[30px] absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-50 duration-700 z-20">
          <Link to={"/"} className="flex gap-x-2 items-center justify-end mr-5 text-[#767676] text-[16px] hover:text-[#000000] font-bold">
            Add to Wish List <FaHeart className="text-black"/>
          </Link>
          <Link to={"/"} className="flex gap-x-2 items-center justify-end mr-5 text-[#767676] text-[16px] hover:text-[#000000] font-bold">
            Compare <TfiReload className="text-black"/>
          </Link>
          <Link to={"/"} className="flex gap-x-2 items-center justify-end mr-5 text-[#767676] text-[16px] hover:text-[#000000] font-bold">
            Add to Cart <FaShoppingCart className="text-black"/>
          </Link>
        </div>
        <div className="mt-2 flex justify-between">
          <Heading text={title} as={"h3"} className={"text-[14px] font-bold"}/>
          <Heading className={"mr-2 text-[12px] font-bold text-[#151515]"} text={price} as={"h3"} />
        </div>
      </div>
    </>
  );
};

export default Product;
