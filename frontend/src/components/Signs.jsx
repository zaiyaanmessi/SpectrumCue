import React from "react";
import { Link } from "react-router-dom";

const Signs = () => {
  return (
    <div>
      <header>
        <div className="hcontainer">
          <h1>What are the signs of autism?</h1>
          <h2>
            One of the most important things you can do as a parent or caregiver
            is to learn the early signs
          </h2>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <h1>
            If you have concerns, get your child screened and contact your
            healthcare provider
          </h1>

          <img src="assets/icon1.png" alt="Autism Signs Icon" width="25%" />
          <div className="borders">
            <h2>By 6 months</h2>
            <p>
              <ul>
                <li>
                  Few or no big smiles or other warm, joyful and engaging
                  expressions
                </li>
                <li>Limited or no eye contact</li>
              </ul>
            </p>
          </div>

          <div className="borders">
            <h2>By 9 months</h2>
            <p>
              <ul>
                <li>
                  Little or no back-and-forth sharing of sounds, smiles or other
                  facial expressions
                </li>
              </ul>
            </p>
          </div>

          <div className="borders">
            <h2>By 12 months</h2>
            <p>
              <ul>
                <li>Little or no babbling</li>
                <li>
                  Little or no back-and-forth gestures such as pointing,
                  showing, reaching or waving
                </li>
                <li>Little or no response to name</li>
              </ul>
            </p>
          </div>

          <div className="borders">
            <h2>By 16 months</h2>
            <p>
              <ul>
                <li>Very few or no words</li>
              </ul>
            </p>
          </div>

          <div className="borders">
            <h2>By 24 months</h2>
            <p>
              <ul>
                <li>
                  Very few or no meaningful, two-word phrases (not including
                  imitating or repeating)
                </li>
              </ul>
            </p>
          </div>

          <div className="borders">
            <h2>At any age</h2>
            <p>
              <ul>
                <li>
                  Loss of previously acquired speech, babbling or social skills
                </li>
                <li>Avoidance of eye contact</li>
                <li>Difficulty understanding other people’s feelings</li>
                <li>Persistent repetition of words or phrases (echolalia)</li>
                <li>Resistance to minor changes in routine or surroundings</li>
                <li>
                  Repetitive behaviors (flapping, rocking, spinning, etc.)
                </li>
              </ul>
            </p>
          </div>
          <p>
            <Link to="/statistics">What are the ASD statistics?</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signs;
