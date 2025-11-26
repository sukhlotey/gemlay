import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const FilterSection = ({ title, options, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-100 py-4">
            <div
                className="flex justify-between items-center cursor-pointer mb-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-xs font-bold text-gray-800 uppercase tracking-wide">{title}</h3>
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
            </div>

            {isOpen && (
                <div className="space-y-2 mt-2">
                    {options.map((option, index) => (
                        <label key={index} className="flex items-center gap-2 cursor-pointer group">
                            <input style={{accentColor:"#00D88B"}} type="checkbox" className="w-4 h-4 border-gray-300 rounded-lg text-[#00D88B] focus:ring-[#004d40]" />
                            <span className="text-xs text-gray-600 group-hover:text-[#004d40]">{option.label} <span className="text-gray-400">({option.count})</span></span>
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
};

const SidebarFilters = ({ isOpen, onClose }) => {
    const priceOptions = [
        { label: "Below ₹ 10,001", count: 2 },
        { label: "₹ 10,001 - ₹ 15,000", count: 2 },
        { label: "₹ 15,001 - ₹ 20,000", count: 22 },
        { label: "₹ 20,001 - ₹ 30,000", count: 83 },
        { label: "₹ 30,001 - ₹ 40,000", count: 89 },
        { label: "₹ 40,001 - ₹ 50,000", count: 89 },
    ];

    const productTypeOptions = [
        { label: "Rings", count: 589 },
        { label: "Earrings", count: 324 },
        { label: "Bracelets", count: 81 },
        { label: "Pendants", count: 83 },
        { label: "Bangles", count: 89 },
        { label: "Necklaces", count: 100 },
    ];

    const weightOptions = [
        { label: "0 grams - 2 grams", count: 589 },
        { label: "2 grams - 5 grams", count: 324 },
        { label: "5 grams - 10 grams", count: 81 },
        { label: "5 grams - 10 grams", count: 83 },
    ];

    const materialOptions = [
        { label: "Diamond", count: 589 },
        { label: "Gold", count: 324 },
        { label: "Solitaire", count: 81 },
        { label: "Gemstone", count: 83 },
    ];

    const metalColorOptions = [
        { label: "Yellow Gold", count: 589 },
        { label: "White Gold", count: 324 },
        { label: "Rose Gold", count: 81 },
        { label: "Tri-Color", count: 83 },
    ];

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:shadow-none md:w-64 md:block md:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        overflow-y-auto p-4 md:p-0 md:pr-6
      `}>
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <span className="text-lg font-bold text-gray-800">FILTERS</span>
                    <button onClick={onClose}>
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                <div className="flex justify-between items-center mb-4 hidden md:flex">
                    <span className="text-sm font-bold text-gray-800">FILTERS  <span className='bg-[#c2e6f5] rounded-md text-[10px] p-1'>1</span></span>
                   
                </div>

                <FilterSection title="Price" options={priceOptions} defaultOpen={true} />
                <FilterSection title="Product Type" options={productTypeOptions} defaultOpen={true} />
                <FilterSection title="Weight Range" options={weightOptions} defaultOpen={true} />
                <FilterSection title="Material" options={materialOptions} defaultOpen={true} />
                <FilterSection title="Metal Colour" options={metalColorOptions} defaultOpen={true} />

                <button style={{background: "linear-gradient(90deg, #00AB63 0%, #007A64 100%)"
}}className="w-full mt-6 bg-[#004d40] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#00352c] transition-colors">
                    More Filters
                </button>
            </div>
        </>
    );
};

export default SidebarFilters;
