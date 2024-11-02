import React from "react";

const Quote = ({ quote, person }) => (
  <section className="quote bg-accent text-white py-8">
    <blockquote className="container mx-auto text-center">
      <p className="text-lg">{quote}</p>
      <cite className="block mt-4 italic">{person}</cite>
    </blockquote>
  </section>
);

export default Quote;
