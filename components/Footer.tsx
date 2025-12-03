import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-solid border-gray-200 dark:border-gray-800 pt-10 pb-6 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">T-Shirt Co.</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Premium quality tees with unique designs to help you wear your story.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">FAQs</a></li>
            <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Shipping & Returns</a></li>
            <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Size Guide</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Company</h3>
          <ul className="space-y-2">
            <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">About Us</a></li>
            <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Contact</a></li>
            <li><a className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary" href="#">Careers</a></li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Get 10% Off Your First Order</h3>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-1 min-w-0 rounded-l-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white text-sm focus:ring-primary focus:border-primary"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-primary text-gray-900 px-4 rounded-r-md text-sm font-bold hover:opacity-90" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-solid border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© 2024 T-Shirt Co. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;