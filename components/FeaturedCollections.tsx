import React from 'react';
import { COLLECTIONS } from '../constants';

const FeaturedCollections: React.FC = () => {
  return (
    <section className="mt-8">
      <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Featured Collections
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
        {COLLECTIONS.map((collection) => (
          <div
            key={collection.id}
            className="bg-cover bg-center flex flex-col rounded-lg justify-end p-4 aspect-[3/4] group overflow-hidden"
            data-alt={collection.altText}
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("${collection.imageUrl}")`
            }}
          >
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-lg font-bold leading-tight">{collection.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;