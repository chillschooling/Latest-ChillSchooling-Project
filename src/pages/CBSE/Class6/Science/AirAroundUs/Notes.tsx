import React from 'react';
import './Notes.css';

const AirAroundUsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 15: Air Around Us</h1>

      <section id="introduction">
        <h2>The Invisible Blanket: Air</h2>
        <p>
          Air is all around us, though we cannot see it. It is an invisible, colorless, and transparent mixture of gases that surrounds the Earth, forming a thin layer called the atmosphere. We can feel its presence when the wind blows or when leaves rustle.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Without air, there would be no life on Earth!</p>
        </div>
      </section>

      <section id="composition-of-air">
        <h2>Composition of Air</h2>
        <p>
          Air is not a single substance but a mixture of various gases. The main components are:
        </p>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Approximate Percentage</th>
              <th>Importance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Nitrogen (N₂)</strong></td>
              <td>78%</td>
              <td>Essential for plant growth.</td>
            </tr>
            <tr>
              <td><strong>Oxygen (O₂)</strong></td>
              <td>21%</td>
              <td>Crucial for respiration in all living organisms and supports burning.</td>
            </tr>
            <tr>
              <td><strong>Carbon Dioxide (CO₂)</strong></td>
              <td>0.03% - 0.04%</td>
              <td>Used by green plants for photosynthesis; released during respiration and burning.</td>
            </tr>
            <tr>
              <td><strong>Water Vapour</strong></td>
              <td>Variable</td>
              <td>Plays a vital role in the water cycle.</td>
            </tr>
            <tr>
              <td><strong>Dust Particles & Other Gases</strong></td>
              <td>Remaining 1%</td>
              <td>Dust can cause allergies; other gases like Argon are present in small amounts.</td>
            </tr>
          </tbody>
        </table>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Remember the main gases: <strong>N</strong>ice (Nitrogen) <strong>O</strong>xygen <strong>C</strong>an (Carbon Dioxide) be <strong>W</strong>onderful (Water Vapour)!</p>
        </div>
      </section>

      <section id="balance-of-gases">
        <h2>Balance of Oxygen and Carbon Dioxide</h2>
        <p>
          The balance of oxygen and carbon dioxide in the atmosphere is maintained through two main processes:
        </p>
        <ul>
          <li>
            <strong>Photosynthesis:</strong> Green plants use carbon dioxide, water, and sunlight to produce food and release oxygen. This replenishes oxygen in the air.
          </li>
          <li>
            <strong>Respiration:</strong> All living organisms (plants and animals) consume oxygen and release carbon dioxide during respiration.
          </li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>During the day, plants produce more oxygen than they consume, helping to keep the air fresh.</p>
        </div>
      </section>

      <section id="air-in-water-and-soil">
        <h2>Air in Water and Soil</h2>
        <ul>
          <li>
            <strong>Air in Water:</strong> Aquatic animals (like fish) breathe the dissolved oxygen present in water.
          </li>
          <li>
            <strong>Air in Soil:</strong> Air is present in the spaces between soil particles. This air is essential for the respiration of organisms living in the soil (like earthworms) and for plant roots.
          </li>
        </ul>
      </section>

      <section id="uses-of-air">
        <h2>Uses of Air</h2>
        <ul>
          <li>
            <strong>Wind Energy:</strong> Moving air (wind) is used to rotate windmills, which can be used for drawing water from wells, running flour mills, and generating electricity.
          </li>
          <li>
            <strong>Flight:</strong> Air helps birds, bats, insects, gliders, parachutes, and airplanes to fly.
          </li>
          <li>
            <strong>Water Cycle:</strong> Water vapor in the air is crucial for the water cycle.
          </li>
          <li>
            <strong>Seed and Pollen Dispersal:</strong> Wind helps in the dispersal of seeds and pollen of plants.
          </li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Air is an invisible mixture of gases, mainly nitrogen (78%) and oxygen (21%).</li>
          <li>Oxygen is for respiration and burning; carbon dioxide for photosynthesis.</li>
          <li>The balance of oxygen and carbon dioxide is maintained by photosynthesis and respiration.</li>
          <li>Air is present in water (dissolved oxygen) and soil.</li>
          <li>Wind (moving air) has various uses, including generating electricity and aiding flight.</li>
        </ul>
      </div>
    </div>
  );
};

export default AirAroundUsNotes;
