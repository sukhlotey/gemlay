import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const products = [
        { id: 1, badge: "new-one.png", mainImage: "one.png" },
        { id: 2, badge: "trending.png", mainImage: "Traced.png" }, 
        { id: 3, badge: "solitaire.png", mainImage: "one.png" },
        { id: 4, badge: "best-seller.png", mainImage: "one.png" },
        { id: 5, badge: "limiteddeal.png", mainImage: "one.png" },
        { id: 6, badge: "instock.png", mainImage: "one.png" },
        { id: 7, badge: "engraving.png", mainImage: "one.png" },
        { id: 8, badge: "best-seller.png", mainImage: "one.png" },
        { id: 9, badge: "new-one.png", mainImage: "one.png" },
        { id: 10, badge: "trending.png", mainImage: "one.png" },
        { id: 11, badge: "solitaire.png", mainImage: "one.png" },
        { id: 12, badge: "best-seller.png", mainImage: "one.png" }
    ].map((product, i) => ({
        ...product,
        name: "Yemeraly Wings Diamond...",
        price: "₹22,32,336",
        originalPrice: "₹22,32,336",
        discount: "10 % on off Making Charges"
    }));

    const mobileProducts = products.filter(product => product.id !== 2).slice(0, 6);

    return (
        <div className="flex-1">
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} isMobile={false} />
                ))}
            </div>

            <div className="grid grid-cols-2 gap-3 md:hidden">
                {mobileProducts.map((product, index) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        isMobile={true}
                        isSecondInMobile={index === 1}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;