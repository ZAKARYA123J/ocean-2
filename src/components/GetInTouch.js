// src/components/GetInTouch.js

import React from "react";

export default function GetInTouch() {
  return (
    <section id="get-in-touch" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-center text-slate-400 mb-10">
          We’d love to hear from you! Contact us using the form below or
          through our social media channels.
        </p>
        <form className="max-w-xl mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
