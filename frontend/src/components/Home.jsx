import React, { useEffect, useState } from "react";
import Features from "./Features";
import Quote from "./Quote";
import { Link } from "react-router-dom";

const quotes = [
  "“Everyone has a mountain to climb and autism has not been my mountain, it has been my opportunity for victory.”",
  "“There are enough people in the world who are going to write you off. You don't need to do that to yourself.”",
  "“Do the best you can and never stop”",
  "“Anything Is possible! If I can do it, so can you!”",
];

const people = [
  "Rachel Barcellona - Autism Spectrum Award Winner",
  "Susan Boyle - Famous Singer",
  "Stephen Wiltshire - Famous Artist",
  "Dani Bowman - Head of DaniMation Studios",
];

const Home = () => {
  const [quote, setQuote] = useState(quotes[0]);
  const [person, setPerson] = useState(people[0]);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setQuote((prev) => quotes[(quotes.indexOf(prev) + 1) % quotes.length]);
      setPerson((prev) => people[(people.indexOf(prev) + 1) % people.length]);
    }, 5000);

    return () => clearInterval(quoteInterval);
  }, []);

  return (
    <div>
      <header className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl mb-2">SpectrumCue</h1>
        <h2 className="text-2xl">It is important to be aware</h2>
        <div className="flex flex-col gap-5">
          <Link className="btn-1 " to="/autism">
            What is Autism ?
          </Link>
          <Link className="btn-2 " to="/findout">
            Are you on the Autism Spectrum?
          </Link>
        </div>
      </header>
      <Features />
      <Quote quote={quote} person={person} />
    </div>
  );
};

export default Home;
