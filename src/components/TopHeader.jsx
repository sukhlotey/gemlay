import React from 'react'

const TopOrderTracking = () => {
  return (
    <>
     <div  style={{ fontFamily: 'Mulish, sans-serif' }} className="bg-[#39C97C] h-6 text-white px-4 flex items-center">
  <div className="mx-auto flex justify-between items-center text-sm w-full">
    <div className="flex items-center space-x-2">
      <span className="font-semibold text-[10px]">ORDER TRACKING</span>
      <img  src='src/assets/truck.svg' className="h-[13.69px] w-[21px]" />
    </div>
    <div className="flex-1 text-center">
      <span className="text-white font-medium text-[9px]">
        Refer and earn extra discount <a href='#' className='text-[#531CC6] underline text-[9px]'>Click here...</a>
      </span>
    </div>
    <div className="font-mono flex items-center">
      <img src='src/assets/location.svg' className='inline h-[14.41px] w-[10.5px] mr-2'/> 
      <p className='text-[10px]'>140406</p>
    </div>
  </div>
</div>

      {/* Main Navigation Bar */}
      <div className="bg-[#FBFFFE] border-b border-gray-200 py-4 px-4">
  <div className=" mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
    
    {/* Logo and Product Info - Left aligned */}
    <div className="flex items-center space-x-6">
      <div>
        <img src='src/assets/Gemlaylogo.svg' alt='logo' />
      </div>
    </div>

    {/* Search Input - Centered */}
    <div className="flex-1 max-w-md">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Enter your order number" 
          className="w-[472.5px] h-[40px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <img src='src/assets/scan.svg' className="h-5 w-5" />
          <img src='src/assets/glass.svg' className="h-5 w-5" />
        </div>
      </div>
    </div>

    {/* Right Section - Action Buttons and Icons together */}
    <div className="flex items-center space-x-6">
      {/* Action Buttons */}
      <div style={{ fontFamily: 'Mulish, sans-serif', fontWeight:'500' }} className="flex items-center space-x-4">
        <p className="text-[14px] text-[#414141] flex items-center">
          <img src='src/assets/durability 1.png' className='h-6 w-6 mr-2'/>
          REFER & EARN
        </p>
        <p className="text-[14px] text-[#414141] flex items-center">
          <img src='src/assets/delivery 1.png' className='h-6 w-6 mr-2'/>
          READY STOCK
        </p>
        <p className="text-[14px] text-[#414141] flex items-center">
          <img src='src/assets/gold 1.png' className='h-6 w-6 mr-2'/>
          JSP
        </p>
      </div>

      {/* Icons - Far right corner */}
      <div className="flex items-center space-x-4">
        <img src="src/assets/watch.svg" alt="" className="h-6 w-6" />
        <img src="src/assets/Cart.svg" alt="" className="h-6 w-6" />
        <img src="src/assets/heart.svg" alt="" className="h-6 w-6" />
        <img src="src/assets/account.svg" alt="" className="h-6 w-6" />
      </div>
    </div>
  </div>
</div>

      {/* Category Navigation */}
     <div className="bg-[#ffffff] border-b border-gray-200 py-2 px-4">
  <div className="mx-auto">
    <div className="flex flex-wrap items-center justify-between gap-4 md:gap-6 lg:gap-8 text-[12px] font-medium text-gray-700">
      <a href="#" className="hover:text-purple-600 transition-colors py-2">NEW ARRIVAL</a>
      <a href="#" className="hover:text-purple-600 transition-colors py-2">RINGS</a>
      <a href="#" className="hover:text-purple-600 transition-colors py-2">EARRINGS</a>
      <a href="#" className="hover:text-purple-600 transition-colors py-2">PENDANTS</a>
      <a href="#" className="hover:text-purple-600 transition-colors py-2">BRACELETS & BANGLES</a>
      <a href="#" className="hover:text-purple-600 transition-colors py-2">SOLITIARES</a>
      <a href="#" className="hover:text-purple-600 transition-colors py-2">GOLD COINS</a>
      <a href="#" className="hover:text-purple-600 transition-colors py-2">ALL JEWELLERY</a>
      <button className="bg-[#39C97C] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors">
        <img src='src/assets/order.svg' alt='order' className="h-4 w-4"/>
        OFFERS
      </button>
    </div>
  </div>
</div>
    </>
  )
}

export default TopOrderTracking