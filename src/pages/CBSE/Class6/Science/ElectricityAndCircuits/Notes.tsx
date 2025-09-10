import React from 'react';
import './Notes.css';

const ElectricityAndCircuitsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 12: Electricity and Circuits</h1>

      <section id="introduction">
        <h2>The Power of Electricity</h2>
        <p>
          Electricity is a very important form of energy that we use in our daily lives. It powers our homes, schools, and factories, making our lives easier and more comfortable. From lighting up our rooms to running our appliances, electricity plays a crucial role.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Before electricity, people used oil lamps and candles for light!</p>
        </div>
      </section>

      <section id="electric-cell">
        <h2>Electric Cell</h2>
        <p>
          An electric cell is a source of electricity. It produces a small amount of electric current through chemical reactions. An electric cell has two terminals: a positive (+) terminal and a negative (-) terminal.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The batteries we use in remote controls, toys, and flashlights are electric cells.</p>
        </div>
      </section>

      <section id="electric-bulb">
        <h2>Electric Bulb</h2>
        <p>
          An electric bulb produces light when electricity flows through it. It has a thin wire called a filament, which glows when current passes through it. The filament is supported by two thicker wires connected to the bulb's two terminals.
        </p>
      </section>

      <section id="electric-circuit">
        <h2>Electric Circuit</h2>
        <p>
          An electric circuit is a complete path through which electric current can flow from one terminal of an electric cell, through components like a bulb, and back to the other terminal.
        </p>
        <ul>
          <li>
            <strong>Closed Circuit:</strong> A complete and uninterrupted path that allows electric current to flow, causing a bulb to glow.
          </li>
          <li>
            <strong>Open Circuit:</strong> A circuit with a break or gap in the path, preventing the flow of electric current. The bulb will not light up.
          </li>
        </ul>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of an electric circuit like a race track: if the track is complete (closed), the car (electricity) can go around. If there's a break (open), the car stops!</p>
        </div>
      </section>

      <section id="electric-switch">
        <h2>Electric Switch</h2>
        <p>
          An electric switch is a simple device used to open or close an electric circuit. It controls the flow of electric current.
        </p>
        <ul>
          <li>
            When the switch is <strong>ON</strong> (closed), the circuit is complete, and current flows.
          </li>
          <li>
            When the switch is <strong>OFF</strong> (open), the circuit is broken, and current stops.
          </li>
        </ul>
      </section>

      <section id="conductors-and-insulators">
        <h2>Conductors and Insulators</h2>
        <p>
          Materials can be classified based on whether they allow electricity to pass through them.
        </p>
        <ul>
          <li>
            <strong>Conductors:</strong> Materials that allow electric current to pass through them easily. Most metals are good conductors.
            <div className="example-box">
              <h4>Examples:</h4>
              <p>Copper, Aluminium, Iron, Human body.</p>
            </div>
          </li>
          <li>
            <strong>Insulators:</strong> Materials that do not allow electric current to flow through them easily.
            <div className="example-box">
              <h4>Examples:</h4>
              <p>Rubber, Plastic, Wood, Glass.</p>
            </div>
          </li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Electricity is a vital form of energy.</li>
          <li>An electric cell is a source of electricity with positive and negative terminals.</li>
          <li>An electric circuit is a complete path for electric current flow.</li>
          <li>A switch opens or closes a circuit.</li>
          <li>Conductors allow electricity to pass, while insulators do not.</li>
        </ul>
      </div>
    </div>
  );
};

export default ElectricityAndCircuitsNotes;
