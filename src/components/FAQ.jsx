import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-lg border border-gray-100 mb-3 overflow-hidden ${!isLast ? 'md:border-b-0' : ''}`}>
      <button
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xs font-semibold text-gray-800">{question}</span>
        {isOpen ? <Minus className="w-4 h-4 text-[#004d40]" /> : <Plus className="w-4 h-4 text-[#004d40]" />}
      </button>

      {isOpen && (
        <div className="p-4 pt-0 text-xs text-gray-600 bg-gray-50 border-t border-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const questions = [
    "What to look for when buying Diamond Earrings?",
    "How can I track my order?",
    "Do you deal with Conflict Free diamonds?",
    "Can I get a lifetime exchange service on my diamond earrings?",
    "Are these diamond earrings comfortable to wear?",
    "What are the different payment modes available if I purchase online?",
    "Are these diamond earrings certified?",
    "Can I customize the metal, colour, clarity, carat weight, gemstone etc...?",
    "Do you provide PAN India shipping?",
    "How long does it take to design a piece of custom jewellery?"
  ];

  return (
    <>
    <div className='pt-[140px]'>
          <section className="border-b border-gray-200 md:border-none pb-6 md:pb-0">
                <h2 className="text-[18px] font-bold text-gray-900 mb-2">Buy Diamond Earrings Online and Glamourise Your Look Instantly!</h2>
                <p className="text-[14px] leading-relaxed text-gray-600">
                    Garnet Lanee is the go-to destination for fashionable and elegant diamond earrings. Our extensive selection of gorgeous diamond earrings comes in various styles and designs to suit any occasion. Whether looking for the perfect gift to express your love or searching for the perfect statement piece to add a touch of sparkle to your outfit, our expertly crafted diamond earrings can provide the perfect solution. Our latest diamond earrings feature a range of shapes and sizes, from classic solitaires to more intricate designs. With various settings and finishes, you can find the perfect pair to match your style. Garnet Lanee is the perfect place to find beautiful, timeless diamond ke earrings.
                </p>
            </section>
    </div>
    <div className="mt-16 mb-16 bg-[#f9fafb] py-12 px-6 rounded-xl border-t border-gray-200 md:border-none">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8 tracking-wide border-b border-gray-200 md:border-none pb-4">
        FAQS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mx-auto">
        {questions.map((q, i) => (
          <FAQItem 
            key={i} 
            question={q} 
            isLast={i === questions.length - 1 || (i === Math.ceil(questions.length / 2) - 1)}
          />
        ))}
      </div>
    </div>
    </>

  );
};

export default FAQ;