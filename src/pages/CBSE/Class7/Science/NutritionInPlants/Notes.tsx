import React from 'react';
import './Notes.css';

const NutritionInPlantsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 1: Nutrition in Plants</h1>

      <section id="introduction">
        <h2>Introduction to Nutrition</h2>
        <p>
          All living organisms, including plants, require food to survive, grow, and repair damaged parts of their bodies. The process by which an organism takes in food and utilizes it is called <strong>nutrition</strong>. The food contains essential substances called <strong>nutrients</strong>, such as carbohydrates, proteins, fats, vitamins, and minerals, which provide energy and are the building blocks of the body.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Plants are the ultimate source of food for all living organisms.</p>
        </div>
      </section>

      <section id="modes-of-nutrition">
        <h2>Modes of Nutrition</h2>
        <p>
          There are two primary modes of nutrition in living organisms:
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Autotrophic Nutrition</th>
                <th>Heterotrophic Nutrition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Organisms that can produce their own food from simple inorganic substances are called <strong>autotrophs</strong>.</td>
                <td>Organisms that cannot synthesize their own food and depend on other organisms for their nutrition are called <strong>heterotrophs</strong>.</td>
              </tr>
              <tr>
                <td>Green plants are the primary examples of autotrophs.</td>
                <td>Animals and humans are examples of heterotrophs as they depend on plants and other animals for food.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="photosynthesis">
        <h2>Photosynthesis: The Food-Making Process in Plants</h2>
        <p>
          Photosynthesis is the unique process by which green plants synthesize their own food. The leaves are often called the "food factories" of the plant as this process primarily occurs there.
        </p>
        <h4>Essential Requirements for Photosynthesis:</h4>
        <ul>
          <li><strong>Sunlight:</strong> The ultimate source of energy for all living organisms.</li>
          <li><strong>Chlorophyll:</strong> This is the green pigment found in the leaves of plants.</li>
          <li><strong>Carbon Dioxide (CO₂):</strong> Plants take in carbon dioxide from the atmosphere through tiny pores on the surface of their leaves called <strong>stomata</strong>.</li>
          <li><strong>Water (H₂O) and Minerals:</strong> The roots of the plant absorb water and minerals from the soil.</li>
        </ul>
        <div className="diagram-container">
          <h4>Photosynthesis Diagram</h4>
          <div className="diagram">
            <div className="sun">Sunlight</div>
            <div className="arrow-down">↓</div>
            <div className="plant">Plant (Chlorophyll)</div>
            <div className="arrow-up">↑</div>
            <div className="inputs">Carbon Dioxide + Water</div>
            <div className="arrow-right">→</div>
            <div className="outputs">Carbohydrates (Glucose) + Oxygen</div>
          </div>
        </div>
        <div className="example-box">
          <h4>Photosynthesis Equation:</h4>
          <p>Carbon Dioxide + Water  (in the presence of Sunlight and Chlorophyll) → Carbohydrates (Glucose) + Oxygen</p>
        </div>
      </section>

      <section id="other-modes-of-nutrition">
        <h2>Other Modes of Nutrition in Plants</h2>
        <p>
          Not all plants are autotrophic. Some plants lack chlorophyll and cannot produce their own food. They rely on other modes of nutrition.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Mode of Nutrition</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Parasitic</strong></td>
                <td>A <strong>parasite</strong> is an organism that lives on or inside another organism (the <strong>host</strong>) and derives its nutrition from it.</td>
                <td>Cuscuta (Amarbel)</td>
              </tr>
              <tr>
                <td><strong>Insectivorous</strong></td>
                <td>Some plants feed on insects to fulfill their nutritional requirements, particularly for nitrogen.</td>
                <td>Pitcher Plant</td>
              </tr>
              <tr>
                <td><strong>Saprotrophic</strong></td>
                <td>This mode of nutrition involves taking in nutrients from dead and decaying matter.</td>
                <td>Fungi (mushrooms, bread mold)</td>
              </tr>
              <tr>
                <td><strong>Symbiotic</strong></td>
                <td>Two different organisms live together and share shelter and nutrients for their mutual benefit.</td>
                <td>Lichens (alga and fungus)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="nutrient-replenishment">
        <h2>Replenishment of Nutrients in the Soil</h2>
        <p>
          Plants continuously absorb mineral nutrients from the soil, which leads to a depletion of these nutrients over time. Therefore, it is essential to replenish the soil.
        </p>
        <ul>
          <li><strong>Fertilizers and Manures:</strong> Farmers add fertilizers and manures to the soil to enrich it with essential nutrients like <strong>nitrogen, phosphorus, and potassium</strong>.</li>
          <li><strong>Role of Rhizobium:</strong> A type of bacterium called <strong>Rhizobium</strong> lives in the root nodules of leguminous plants (like peas, beans, and grams). These bacteria can take atmospheric nitrogen and convert it into a usable form for the plant.</li>
        </ul>
        <div className="memory-trick">
          <h4>Remember Rhizobium!</h4>
          <p>Rhizobium is a helpful bacteria that provides nitrogen to the plants, acting like a natural fertilizer factory!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Nutrition is the process of taking in and using food.</li>
          <li>Plants are mostly autotrophs, making their own food via photosynthesis.</li>
          <li>Photosynthesis requires sunlight, chlorophyll, carbon dioxide, and water.</li>
          <li>Some plants are heterotrophs (parasitic, insectivorous, saprotrophic).</li>
          <li>Symbiotic relationships involve mutual benefit.</li>
          <li>Soil nutrients are replenished by fertilizers, manures, and nitrogen fixation.</li>
        </ul>
      </div>
    </div>
  );
};

export default NutritionInPlantsNotes;