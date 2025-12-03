import React from 'react';
import { PRODUCTS } from '../constants';

const PopularProducts: React.FC = () => {
  return (
    <section className="mt-8">
      <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Popular Right Now
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="flex flex-col gap-2 group">
            <div className="overflow-hidden rounded-lg">
              <img
                className="aspect-[3/4] w-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt={product.altText}
                src={product.imageUrl}
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{product.title}</h3>
              <p className="text-sm font-bold text-gray-900 dark:text-white">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;