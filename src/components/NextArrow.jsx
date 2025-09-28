import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const NextArrow = (props) => {
    const {onClick } = props;
  return (
    <div
      className="!flex items-center justify-center w-12 h-12 rounded-full bg-black/20 hover:bg-black transition-colors duration-300 absolute top-1/2 -translate-y-1/2 right-[-20px] z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaChevronRight className="text-white text-xl" />
    </div>
  )
}

export default NextArrow