import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Twitter, Plus, Minus, Phone, Mail, MapPin } from 'lucide-react';

const FooterSection = ({ title, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 md:border-none last:border-none">
            <button
                className="w-full flex justify-between items-center py-4 md:py-0 md:mb-6 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-bold text-gray-800 tracking-wider text-sm uppercase">{title}</h3>
                <div className="md:hidden">
                    {isOpen ? <Minus className="w-4 h-4 text-gray-600" /> : <Plus className="w-4 h-4 text-gray-600" />}
                </div>
            </button>

            <div className={`${isOpen ? 'block' : 'hidden'} md:block pb-4 md:pb-0`}>
                <ul className="space-y-3 text-[11px] font-medium text-gray-600 uppercase tracking-wide">
                    {links.map((link, index) => (
                        <li key={index}><a href="#" className="hover:text-[#004d40] transition-colors">{link}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <>
        <footer style={{ fontFamily: 'Mulish, sans-serif' }} className="bg-[#E0F7FA] pt-10 md:pt-16 pb-8 text-gray-700 font-sans">
            <div className="container mx-auto px-6">
                <div className="md:hidden mb-8">
                    <div className="text-center">
                        <p className="font-bold text-gray-700 text-xs mb-3 uppercase">FOLLOW US</p>
                        <div className="flex gap-4 justify-center">
                            <img src="src/assets/facebook.png" alt="Facebook" className="w-6 h-6" />
                            <img src="src/assets/instagram.png" alt="Instagram" className="w-6 h-6" />
                            <img src="src/assets/youtube.png" alt="YouTube" className="w-6 h-6" />
                            <img src="src/assets/pint.png" alt="Pinterest" className="w-6 h-6" />
                            <img src="src/assets/wiki.png" alt="Wikipedia" className="w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                    <FooterSection
                        title="OUR SERVICES"
                        links={["GOLD RATES", "DIGITAL GOLD", "VARIOUS PAYMENT METHOD", "FINANCING OPTIONS", "GEMLAY ASSURANCE", "FRANCHISE ENQUIRY"]}
                    />

                    <FooterSection
                        title="OUR POLICIES"
                        links={["15-DAY RETURNS", "FREE SHIPPING", "LIFETIME EXCHANGE POLICY", "RETURN AND REFUND POLICY", "TERMS & CONDITIONS ON OFFERS"]}
                    />

                    <FooterSection
                        title="JEWELLERY KNOWLEDGE"
                        links={["GOLD GUIDE", "DIAMOND GUIDE", "JEWELLERY GUIDE", "SOLITAIRE DIAMOND GUIDE", "GEMSTONE GUIDE", "CERTIFICATION GUIDE", "JEWELLERY GIFTING"]}
                    />

                    <FooterSection
                        title="ABOUT US"
                        links={["OUR VISION", "WHY GEMLAY ?", "BLOG", "OUR STORY", "OUR PROCESS", "OUR TEAM", "REVIEWS AND RATINGS", "PRESS RELEASE"]}
                    />

                    <div className="md:col-span-1">
                        <h3 className="font-bold text-gray-800 tracking-wider text-sm uppercase mb-6 hidden md:block">CONTACT US</h3>
                        <div className="space-y-4 text-[11px] font-medium text-gray-600">
                            <div className="flex gap-3 items-start">
                                <Phone className="w-4 h-4 text-gray-500 mt-0.5" />
                                <div>
                                    <p>+91 98888 98866</p>
                                    <p className="text-red-500 text-[10px]">(10am-8pm, 7 days a week)</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Mail className="w-4 h-4 text-gray-500" />
                                <p>info@gemlay.com</p>
                            </div>
                            <div className="flex gap-3 items-start">
                                <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                                <div>
                                    <p className="font-bold text-gray-700">Gemlay Jewels Private Limited</p>
                                    <p>Unit No 15, Ground Floor, Jubilee Junction, Mohali, 160062.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="font-bold text-gray-700 text-xs mb-3">Download Our Application</p>
                            <div className="flex gap-2">
                                <div className="text-white rounded flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                                    <img src="src/assets/google.png" alt="Google Play" />
                                </div>
                                <div className="rounded flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                                    <img src="src/assets/appstore.png" alt="App Store" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 hidden md:block">
                            <p className="font-bold text-gray-700 text-xs mb-3 uppercase text-center md:text-left">FOLLOW US</p>
                            <div className="flex gap-3 justify-center md:justify-start">
                                <img src="src/assets/facebook.png" alt="Facebook" />
                                <img src="src/assets/instagram.png" alt="Instagram" />
                                <img src="src/assets/youtube.png" alt="YouTube" />
                                <img src="src/assets/pint.png" alt="Pinterest" />
                                <img src="src/assets/wiki.png" alt="Wikipedia" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 pt-4 text-center text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                SITE MAP | PRIVACY POLICY | TERMS AND CONDITIONS | FAQs
            </div>
        </footer>
        <div style={{background: "linear-gradient(90deg, #012433 0%, #007A64 100%)"}} className='p-2 text-center text-white text-[10px]'>
            <p>@ 2024 GEMLAY.COM . ALL RIGHTS RESERVED</p>
        </div>
        </>
    );
};

export default Footer;