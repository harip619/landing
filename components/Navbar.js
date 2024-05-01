import React from 'react'

const Navbar = () => {
  return (
    <div className='p-5'>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/assets/cooliebg.png" alt="logo" height={400} width={100}/>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                
                <button className='text-white'>About Us</button>
                <button className='text-white'>Delivery Partners</button>
                <button className='text-white'>Pricing</button>
                
            </div>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Sign In
            </button>
        </div>
    </div>
  )
}

export default Navbar