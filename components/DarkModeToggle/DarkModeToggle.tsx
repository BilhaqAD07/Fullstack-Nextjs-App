import React from 'react'

const DarkModeToggle = () => {
  const mode = 'dark'
    return (
    <div className='btn-container w-16 h-10 border-[1.5px] border-solid border-[#53c28b70] rounded-[30px] flex justify-between items-center p-1 relative'>
        <div className="text-sm">🌙</div>
        <div className="text-sm">☀️</div>
        <div className="ball w-4 h-4 bg-[#53c28b] rounded-full absolute"></div>
    </div>
  )
}

export default DarkModeToggle