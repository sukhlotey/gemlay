import React, { useState } from 'react';
import Layout from '../components/Layout';
import SidebarFilters from '../components/SidebarFilters';
import ProductGrid from '../components/ProductGrid';
import FAQ from '../components/FAQ';
import SEOContent from '../components/SEOContent';

const ProductListing = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <Layout>

            <div className="flex flex-col md:flex-row gap-8 relative">
                <SidebarFilters isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
                <ProductGrid />
            </div>
            <FAQ />
            <SEOContent />
        </Layout>
    );
};

export default ProductListing;
