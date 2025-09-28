import React from 'react'
import { FaChevronLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const {onClick } = props;
  return (
    <div
      className="!flex items-center justify-center w-12 h-12 rounded-full bg-black/20 hover:bg-black transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-[-20px] z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft className="text-white text-xl" />
    </div>
  )
}

export default PrevArrow