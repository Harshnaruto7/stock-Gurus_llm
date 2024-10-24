import React from "react";

const EmailMarketing = () => {
  return (
    <section className="py-10  flex flex-col items-center justify-center bg-transparent  ">
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
      <p className="text-white mt-2">
        Stay updated with our latest news and offers!
      </p>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-4">
      {/* Input Field */}
      <label className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
          />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
          />
        </svg>
        <input
          type="text"
          className="input input-bordered border-gray-300 focus:border-black focus:ring focus:ring-black focus:ring-opacity-50 w-full"
          placeholder="Enter your email"
        />
      </label>

      {/* Subscribe Button */}
      <button className="btn btn-primary w-full sm:w-auto">
        Subscribe
      </button>
    </div>
  </section>
  );
};

export default EmailMarketing;