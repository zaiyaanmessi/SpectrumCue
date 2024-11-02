import React from "react";
import { Link } from "react-router-dom";

const Statistics = () => {
  return (
    <div>
      <header>
        <div className="hcontainer">
          <h1>Autism Statistics and Facts</h1>
          <h2>
            The CDC reported that approximately 1 in 44 children in the U.S. is
            diagnosed with an autism spectrum disorder (ASD)
          </h2>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <img src="assets/icon3.png" width="25%" alt="Autism Prevalence" />
          <h2>Autism Prevalence</h2>
          <p>
            <ul>
              <li>
                Boys are four times more likely to be diagnosed with autism than
                girls.
              </li>
              <li>Autism affects all ethnic and socioeconomic groups.</li>
              <li>
                31% of children with ASD have an intellectual disability
                (intelligence quotient [IQ] &gt; 70 ), 25% are in the borderline
                range (IQ 71-85), and 44% have IQ scores in the average to above
                average range (i.e., IQ &gt; 85).
              </li>
              <li>1 in 27 boys identified with autism.</li>
              <li>1 in 116 girls identified with autism.</li>
            </ul>
          </p>
          <p>
            <Link to="/causes">What causes ASD?</Link>
          </p>
        </div>
      </section>

      <section className="quote">
        <cite>
          Minority groups tend to be diagnosed later and less often. There is no
          medical detection for autism.
        </cite>
      </section>
    </div>
  );
};

export default Statistics;
