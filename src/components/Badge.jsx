import React from 'react'

const Badge = ({badgeText,className}) => {
  return (
    <div className={`px-[15px] py-[15px] bg-black text-white w-[90px] text-center text-[12px] font-bold ${className}`}>{badgeText}</div>
  )
}

export default Badge