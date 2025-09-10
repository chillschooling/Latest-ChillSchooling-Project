import React from 'react';
import './Notes.css';

const TransportationInAnimalsAndPlantsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 7: Transportation in Animals and Plants</h1>

      <section id="introduction-animals">
        <h2>I. Transportation in Animals</h2>
        <p>
          Transportation in animals involves the movement of essential substances like food, oxygen, hormones, and waste products throughout the body. This is primarily carried out by the <strong>circulatory system</strong>.
        </p>
      </section>

      <section id="blood-components">
        <h3>A. Components of the Circulatory System: Blood</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Plasma</strong></td>
                <td>Liquid part of blood; transports food, water, salts, hormones, and waste products.</td>
              </tr>
              <tr>
                <td><strong>Red Blood Cells (RBCs)</strong></td>
                <td>Contain haemoglobin; transport oxygen from lungs to body cells.</td>
              </tr>
              <tr>
                <td><strong>White Blood Cells (WBCs)</strong></td>
                <td>Fight infections; part of the immune system.</td>
              </tr>
              <tr>
                <td><strong>Platelets</strong></td>
                <td>Help in blood clotting at the site of injury.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="blood-vessels">
        <h3>B. Blood Vessels</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Function</th>
                <th>Characteristics</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Arteries</strong></td>
                <td>Carry oxygen-rich blood from the heart to the body.</td>
                <td>Thick, elastic walls; deep-seated.</td>
              </tr>
              <tr>
                <td><strong>Veins</strong></td>
                <td>Carry carbon dioxide-rich blood from the body back to the heart.</td>
                <td>Thin walls; contain valves; superficial.</td>
              </tr>
              <tr>
                <td><strong>Capillaries</strong></td>
                <td>Connect arteries and veins; exchange substances between blood and cells.</td>
                <td>Extremely thin walls (one cell thick).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="heart">
        <h3>C. Heart</h3>
        <p>
          A muscular organ that pumps blood throughout the body. Located in the chest cavity, slightly tilted to the left.
        </p>
        <h4>Structure:</h4>
        <ul>
          <li>Four chambers: two upper (Atria) and two lower (Ventricles).</li>
        </ul>
        <h4>Working (Simplified):</h4>
        <ul>
          <li>Deoxygenated blood from the body → Right atrium → Right ventricle → Lungs (for oxygenation).</li>
          <li>Oxygenated blood from lungs → Left atrium → Left ventricle → All parts of the body.</li>
        </ul>
        <div className="did-you-know">
          <h4>Heartbeat and Pulse</h4>
          <p><strong>Heartbeat:</strong> Rhythmic contraction and relaxation of heart chambers. <strong>Pulse:</strong> Throbbing sensation in arteries due to blood being pushed by the heart.</p>
        </div>
      </section>

      <section id="excretion-animals">
        <h3>D. Excretion in Animals</h3>
        <p>
          The process of removal of waste products (metabolic wastes) from the body.
        </p>
        <h4>Human Excretory System:</h4>
        <ul>
          <li><strong>Kidneys:</strong> Filter blood to remove waste (urea, salts, water).</li>
          <li><strong>Ureters:</strong> Carry urine from kidneys to bladder.</li>
          <li><strong>Urinary Bladder:</strong> Stores urine temporarily.</li>
          <li><strong>Urethra:</strong> Expels urine from the body.</li>
        </ul>
        <div className="example-box">
          <h4>Dialysis:</h4>
          <p>In case of kidney failure, an artificial kidney (dialysis machine) is used to filter the blood.</p>
        </div>
      </section>

      <section id="transportation-plants">
        <h2>II. Transportation in Plants</h2>
        <p>
          Transportation in plants involves the movement of water, minerals, and food to different parts of the plant, carried out by specialized vascular tissues.
        </p>
        <h3>A. Vascular Tissues:</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Tissue</th>
                <th>Function</th>
                <th>Direction of Flow</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Xylem</strong></td>
                <td>Transports water and dissolved minerals from roots to leaves.</td>
                <td>Unidirectional (upwards only)</td>
              </tr>
              <tr>
                <td><strong>Phloem</strong></td>
                <td>Transports food (sugars) from leaves to all other parts of the plant.</td>
                <td>Bidirectional (upwards and downwards)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="water-transport-plants">
        <h3>B. Processes Involved in Water and Mineral Transport:</h3>
        <ul>
          <li><strong>Absorption by Roots:</strong> Roots absorb water and minerals through <strong>root hairs</strong>. Water moves by <strong>osmosis</strong>.</li>
          <li><strong>Transpiration:</strong> Loss of water in the form of water vapour from aerial parts (mainly through <strong>stomata</strong>).</li>
        </ul>
        <div className="memory-trick">
          <h4>Transpiration Pull:</h4>
          <p>Evaporation of water from leaves creates a suction force that pulls water upwards through the xylem vessels, like sucking through a straw.</p>
        </div>
      </section>

      <section id="food-transport-plants">
        <h3>C. Transport of Food:</h3>
        <p>
          Food (sugars) synthesized in the leaves is transported to all other parts of the plant through the <strong>phloem</strong>. This process is called <strong>translocation</strong>.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Animals use a circulatory system (blood, vessels, heart) for transportation and an excretory system for waste removal.</li>
          <li>Plants use xylem (water, minerals - unidirectional) and phloem (food - bidirectional) for transportation.</li>
          <li>Transpiration pull is key for water transport in plants.</li>
        </ul>
      </div>
    </div>
  );
};

export default TransportationInAnimalsAndPlantsNotes;
