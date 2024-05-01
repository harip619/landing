import React from 'react'

const LandingNavbar = () => {
  return (
    <div className='p-5'>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/assets/cooliebg.png" alt="logo" height={400} width={100}/>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                
                <a href='#about'><button className='text-white hover:bg-red-700 p-2 rounded-lg' >About Us</button></a>
                <a href="#review"><button className='text-white hover:bg-red-700 p-2 rounded-lg'>Reviews</button></a>
                <a href="#faq"><button className='text-white hover:bg-red-700 p-2 rounded-lg'>FAQ's</button></a>
                
            </div>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Sign In
            </button>
        </div>
    </div>
  )
}

export default LandingNavbar