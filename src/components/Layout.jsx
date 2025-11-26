import React from 'react';
import Footer from './Footer';
import TopOrderTracking from './TopHeader';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <TopOrderTracking />
            <main className="flex-grow container mx-auto px-6 py-6">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
