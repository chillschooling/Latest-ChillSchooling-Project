import React from 'react';
import './Notes.css';

const ElectricCurrentAndItsEffectsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 10: Electric Current and its Effects</h1>

      <section id="introduction">
        <h2>Introduction to Electric Current</h2>
        <ul>
          <li><strong>Electric Charge:</strong> Fundamental property of matter (positive and negative).</li>
          <li><strong>Electric Current:</strong> Flow of electric charges (electrons) through a conductor.</li>
        </ul>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Conductors</th>
                <th>Insulators</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Materials that allow electric current to pass through them easily.</td>
                <td>Materials that offer high resistance to the flow of electric current.</td>
              </tr>
              <tr>
                <td>e.g., Copper, Iron, Water</td>
                <td>e.g., Rubber, Wood, Plastic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="electric-circuits">
        <h2>Electric Circuits</h2>
        <p>
          An <strong>electric circuit</strong> is a continuous and closed path along which electric current flows.
        </p>
        <h4>Components of an Electric Circuit:</h4>
        <ul>
          <li><strong>Electric Cell/Battery:</strong> Power source.</li>
          <li><strong>Connecting Wires:</strong> Connect components.</li>
          <li><strong>Bulb:</strong> Glows when current passes (heating effect).</li>
          <li><strong>Switch:</strong> Opens or closes the circuit.</li>
          <li><strong>Load:</strong> Device that uses electricity.</li>
        </ul>
        <div className="did-you-know">
          <h4>Circuit States:</h4>
          <p><strong>Closed Circuit:</strong> Allows current to flow. <strong>Open Circuit:</strong> Current cannot flow.</p>
        </div>
      </section>

      <section id="heating-effect">
        <h2>Heating Effect of Electric Current</h2>
        <p>
          When electric current passes through a wire, the wire gets heated. This is due to the resistance of the conductor, converting electrical energy into heat energy.
        </p>
        <h4>Factors Affecting Heat Produced:</h4>
        <ul>
          <li>Material of the wire</li>
          <li>Length of the wire</li>
          <li>Thickness of the wire</li>
        </ul>
        <div className="example-box">
          <h4>Applications:</h4>
          <ul>
            <li>Electric Heaters, Toasters, Irons (use high-resistance coils).</li>
            <li>Electric Bulbs (filament heats up and glows).</li>
            <li><strong>Electric Fuse:</strong> Safety device with a low melting point wire that breaks the circuit if current is too high.</li>
            <li><strong>Miniature Circuit Breakers (MCBs):</strong> Modern safety devices that automatically switch off the circuit.</li>
          </ul>
        </div>
      </section>

      <section id="magnetic-effect">
        <h2>Magnetic Effect of Electric Current</h2>
        <p>
          When an electric current flows through a conductor, it produces a magnetic field around it. This was discovered by Hans Christian Oersted.
        </p>
        <h4>Properties:</h4>
        <ul>
          <li>A compass needle deflects near a current-carrying wire.</li>
          <li>Direction of deflection reverses if current direction reverses.</li>
          <li>Strength of magnetic field increases with current.</li>
        </ul>
        <div className="memory-trick">
          <h4>Electromagnets:</h4>
          <p>Temporary magnets created by passing current through a coil around a soft iron core. They can be turned on/off and their strength controlled.</p>
        </div>
        <h4>Applications of Electromagnets:</h4>
        <ul>
          <li>Electric Bell (uses electromagnet to strike a gong).</li>
          <li>Cranes (lift heavy iron/steel objects).</li>
          <li>Telephones, Loudspeakers, Motors.</li>
        </ul>
      </section>

      <section id="safety-measures">
        <h2>Safety Measures</h2>
        <ul>
          <li>Use proper insulation for wires.</li>
          <li>Avoid short circuits.</li>
          <li>Use fuses and MCBs to prevent damage from excessive current.</li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Electric current is the flow of charge.</li>
          <li>Circuits are continuous paths for current.</li>
          <li>Electric current produces heating and magnetic effects.</li>
          <li>Heating effect is used in heaters and bulbs; magnetic effect in electromagnets.</li>
          <li>Fuses and MCBs are crucial safety devices.</li>
        </ul>
      </div>
    </div>
  );
};

export default ElectricCurrentAndItsEffectsNotes;
