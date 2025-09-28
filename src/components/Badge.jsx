import React from 'react'

const Badge = ({badgeText,className}) => {
  return (
    <div className={`px-[25px] py-[10px] bg-black text-white w-[90px] text-center text-[14px] font-bold ${className}`}>{badgeText}</div>
  )
}

export default Badge