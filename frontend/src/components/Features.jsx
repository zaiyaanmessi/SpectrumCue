import React from "react";
import { Link } from "react-router-dom";

const Features = () => (
  <section className="features my-8">
    <div className="container mx-auto bg-white text-black py-10">
      <h2 className="text-2xl text-gray-800">Features</h2>
      <ul className="flex flex-wrap justify-around mt-4">
        <li className="feature w-1/3 hover:scale-105 transition transform duration-200">
          <Link to="/signs" className="flex flex-col items-center">
            <img
              src="/assets/feature1.png"
              alt="Signs Icon"
              className="w-1/5"
            />
            <span className="mt-2">Signs</span>
          </Link>
        </li>
        <li className="feature w-1/3 hover:scale-105 transition transform duration-200">
          <Link to="/statistics" className="flex flex-col items-center">
            <img
              src="/assets/feature2.png"
              alt="Statistics Icon"
              className="w-1/5"
            />
            <span className="mt-2">Statistics</span>
          </Link>
        </li>
        <li className="feature w-1/3 hover:scale-105 transition transform duration-200">
          <Link to="/causes" className="flex flex-col items-center">
            <img
              src="/assets/feature3.png"
              alt="Causes Icon"
              className="w-1/5"
            />
            <span className="mt-2">Causes</span>
          </Link>
        </li>
      </ul>
    </div>
  </section>
);

export default Features;
