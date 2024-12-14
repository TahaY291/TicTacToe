import React from 'react'

function Square({ value, onclick }) {
  return (
    <>
      <button disabled={value === null ? false : true}
        onClick={onclick} className={`w-32 mx-1 ${!value && 'inner-shadow'} rounded-lg  h-32 text-8xl pb-7  flex items-center justify-center 
                  ${value === "X" && "text-[#e28adb] text-shadow" || value === "O" && "text-[#8091a7] blue-shadow"}`} >
        {value}
      </button>
    </>
  )
}

export default Square
