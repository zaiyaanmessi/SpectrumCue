import React from "react";
import { Link } from "react-router-dom";

const Causes = () => {
  return (
    <div>
      <header>
        <div className="hcontainer">
          <h1>What causes autism?</h1>
          <h2>
            Research indicates that genetics are involved in the vast majority
            of cases
          </h2>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <img src="assets/icon4.png" width="25%" alt="Challenges and Causes" />
          <h2>Challenges and Causes</h2>
          <p>
            <ul>
              <li>
                Children born to older parents are at a higher risk for having
                autism.
              </li>
              <li>
                Parents who have a child with ASD have a 2 to 18 percent chance
                of having a second child who is also affected.
              </li>
              <li>
                Studies have shown that among identical twins, if one child has
                autism, the other will be affected about 36 to 95 percent of the
                time. In non-identical twins, if one child has autism, then the
                other is affected about 31 percent of the time.
              </li>
              <li>
                Over the last two decades, extensive research has asked whether
                there is any link between childhood vaccinations and autism. The
                results of this research are clear: Vaccines do not cause
                autism.
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section className="quote">
        <cite>
          Drowning remains a leading cause of death for children with autism and
          accounts for approximately 90 percent of deaths associated with
          wandering or bolting by those age 14 and younger.
        </cite>
      </section>
    </div>
  );
};

export default Causes;
