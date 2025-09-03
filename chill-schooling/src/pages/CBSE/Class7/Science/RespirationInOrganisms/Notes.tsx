import React from 'react';
import './Notes.css';

const RespirationInOrganismsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 6: Respiration in Organisms</h1>

      <section id="introduction">
        <h2>Why Do Organisms Respire?</h2>
        <p>
          All living organisms need energy to perform various life functions like nutrition, transport, excretion, and reproduction. This energy is obtained from the food we eat through a process called <strong>respiration</strong>.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Our bodies are made up of tiny units called cells, and each cell needs energy to carry out its specific functions.</p>
        </div>
      </section>

      <section id="breathing-vs-respiration">
        <h2>Breathing vs. Cellular Respiration</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Breathing</th>
                <th>Cellular Respiration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nature</strong></td>
                <td>Physical process (taking in oxygen-rich air and releasing carbon dioxide-rich air).</td>
                <td>Biochemical process (breaking down food to release energy).</td>
              </tr>
              <tr>
                <td><strong>Location</strong></td>
                <td>Occurs with the help of respiratory organs (e.g., lungs).</td>
                <td>Occurs inside the cells (in mitochondria).</td>
              </tr>
              <tr>
                <td><strong>Energy Release</strong></td>
                <td>No energy is released directly.</td>
                <td>Energy is released from food.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="types-of-respiration">
        <h2>Types of Cellular Respiration</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Oxygen Requirement</th>
                <th>Process</th>
                <th>End Products</th>
                <th>Energy Released</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Aerobic Respiration</strong></td>
                <td>Presence of oxygen</td>
                <td>Complete breakdown of glucose</td>
                <td>Carbon dioxide + Water</td>
                <td>Large amount</td>
              </tr>
              <tr>
                <td><strong>Anaerobic Respiration</strong></td>
                <td>Absence of oxygen</td>
                <td>Partial breakdown of glucose</td>
                <td>Alcohol + Carbon dioxide (in yeast)<br/>Lactic acid (in muscle cells)</td>
                <td>Small amount</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="example-box">
          <h4>Example:</h4>
          <p>During strenuous exercise, our muscle cells may respire anaerobically, producing lactic acid which causes muscle cramps.</p>
        </div>
      </section>

      <section id="respiration-in-humans">
        <h2>Respiration in Humans</h2>
        <p>
          Humans breathe through their <strong>lungs</strong>. The mechanism involves inhalation (ribs move up and outwards, diaphragm moves down) and exhalation (ribs move down and inwards, diaphragm moves up).
        </p>
        <div className="diagram-container">
          <h4>Human Respiratory System (Simplified)</h4>
          <div className="diagram">
            <div className="inputs">Air (Oxygen-rich)</div>
            <div className="arrow-down">↓</div>
            <div className="plant">Nostrils → Nasal Cavity → Windpipe</div>
            <div className="arrow-down">↓</div>
            <div className="inputs">Lungs (Gas Exchange)</div>
            <div className="arrow-up">↑</div>
            <div className="outputs">Air (Carbon Dioxide-rich)</div>
          </div>
        </div>
      </section>

      <section id="respiration-in-other-animals">
        <h2>Respiration in Other Animals</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Animal</th>
                <th>Respiratory Organ(s)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Elephants, Lions, Cows, Goats, Birds</td>
                <td>Lungs</td>
              </tr>
              <tr>
                <td>Insects (e.g., Cockroach)</td>
                <td>Spiracles and Tracheae</td>
              </tr>
              <tr>
                <td>Earthworms</td>
                <td>Moist and slimy skin</td>
              </tr>
              <tr>
                <td>Fish</td>
                <td>Gills</td>
              </tr>
              <tr>
                <td>Frogs</td>
                <td>Lungs and moist skin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="respiration-in-plants">
        <h2>Respiration in Plants</h2>
        <p>
          Like all living organisms, plants also respire. They take in oxygen from the air and release carbon dioxide. Each part of the plant can independently respire.
        </p>
        <h4>Gas Exchange in Plants occurs through:</h4>
        <ul>
          <li><strong>Stomata:</strong> Tiny pores on the surface of leaves.</li>
          <li><strong>Lenticels:</strong> Special tissues on woody stems.</li>
          <li><strong>Roots:</strong> Absorb oxygen from air spaces in the soil.</li>
        </ul>
        <div className="memory-trick">
          <h4>Remember!</h4>
          <p>Plants respire all the time, but photosynthesis only happens in the presence of sunlight.</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Respiration is the process of releasing energy from food.</li>
          <li>Breathing is a physical process, while cellular respiration is a biochemical process.</li>
          <li>Aerobic respiration requires oxygen, anaerobic does not.</li>
          <li>Different animals have different respiratory organs.</li>
          <li>Plants also respire through stomata, lenticels, and roots.</li>
        </ul>
      </div>
    </div>
  );
};

export default RespirationInOrganismsNotes;
