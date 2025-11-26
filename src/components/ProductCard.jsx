import React from 'react';
import { Heart, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductCard = ({ product, isMobile, isSecondInMobile }) => {
    const isSecondCard = product.id === 2; 

    return (
        <div  style={{ fontFamily: 'Mulish, sans-serif' }} className="bg-[#F9FBFA] rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 relative group font-sans">
            <div className="relative p-4 pb-0">
                {!(isMobile && isSecondInMobile) && (
                    <div className="absolute top-1 left-0 h-[30] w-[140px]">
                        <img src={`src/assets/${product.badge}`} alt="Badge" className="w-full h-auto object-contain" />
                    </div>
                )}

                <div className="absolute top-4 right-4 z-10 flex flex-col gap-3">
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-6 h-6 stroke-1" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <div className="border border-gray-300 rounded-full p-1.5">
                            <Play className="w-3 h-3 fill-gray-400 stroke-none" />
                        </div>
                    </button>
                </div>

                <div className="relative aspect-[4/3] flex items-center justify-center mt-4">
                    <img
                        src={`src/assets/${product.mainImage}`}
                        alt="Product"
                        className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500"
                    />
                    
                    {isSecondCard && !isMobile && (
                        <div className="absolute flex items-center justify-center">
                            <p className="text-black font-bold text-lg">Image Not Found</p>
                        </div>
                    )}
                    
                    {!isMobile && (
                        <div className="absolute bottom-2 right-2 flex gap-1">
                            <button className="bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors">
                                <ChevronLeft className="w-3 h-3 text-gray-600" />
                            </button>
                            <button className="bg-white rounded-full p-1.5 shadow-md hover:bg-gray-50 transition-colors">
                                <ChevronRight className="w-3 h-3 text-gray-600" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className={`${isMobile ?'p-1' : 'p-3 pt-2 bg-[#ffffff]'}`}>
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-baseline gap-2">
                        <span className={`${isMobile ? 'text-[11px]' : 'text-[16px]'} font-bold text-gray-900`}>{product.price}</span>
                        <span className={`${isMobile ? 'text-[9px]' : 'text-[13px]'} text-gray-400 line-through decoration-gray-400`}>{product.originalPrice}</span>
                    </div>
                    <div className={`flex ${isMobile ? 'flex-col gap-0.5' : 'gap-1.5'} px-1`}>
                        <div className={`${isMobile ? 'w-3 h-3' : 'w-5 h-5'} rounded-full bg-[#fdd835] ring-1 ring-offset-1 ring-[#fdd835] cursor-pointer`}></div>
                        <div className={`${isMobile ? 'w-3 h-3' : 'w-5 h-5'} rounded-full bg-gray-300 cursor-pointer hover:ring-1 hover:ring-offset-1 hover:ring-gray-300`}></div>
                        <div className={`${isMobile ? 'w-3 h-3' : 'w-5 h-5'} rounded-full bg-[#ff8a65] cursor-pointer hover:ring-1 hover:ring-offset-1 hover:ring-[#ff8a65]`}></div>
                    </div>
                </div>

                <div className="mb-1">
                    <p className={`${isMobile ? 'text-[8px]' : 'text-[12px]'} font-medium text-[#00a651]`}>{product.discount}</p>
                </div>

                <h3 className={`${isMobile ? 'text-[9px]' : 'text-[13px]'} text-gray-500 mb-3 truncate`}>{product.name}</h3>

                <div className="flex items-center justify-between ">
                    <button className="flex items-center gap-1 text-gray-700 ${isMobile ? 'text-[8px]' : 'text-[12px]'} font-medium hover:text-[#004d40] transition-colors">
                        <img src="src/assets/price.png" className={`${isMobile ? 'w-2 h-2' : 'w-4 h-4'}`} />
                        <span className={`${isMobile?"text-[8px] ":""}`}>View Similar</span>
                    </button>

                    <button className="bg-cover bg-center bg-no-repeat text-white flex items-center gap-1 ${isMobile ? 'py-0' : 'py-0 px-6 text-sm'} rounded-l-full rounded-r-md hover:opacity-90 transition-opacity shadow-sm"
                        style={{ backgroundImage: "url('src/assets/buybg.png')" }}>
                        <img src="src/assets/buycart.png" className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                        <span className={`${isMobile?"font-semibold text-[8px] p-1":"p-1"}`}>Buy Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;