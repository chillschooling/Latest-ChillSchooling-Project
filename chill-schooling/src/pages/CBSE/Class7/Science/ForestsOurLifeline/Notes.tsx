import React from 'react';
import './Notes.css';

const ForestsOurLifelineNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 12: Forests: Our Lifeline</h1>

      <section id="what-is-forest">
        <h2>What is a Forest?</h2>
        <p>
          A forest is a large area covered with a wide variety of trees, plants, and other living organisms. It forms a complete ecosystem that includes various living organisms and non-living components like air, water, nutrients, rocks, and sunlight. Forests are considered a natural renewable resource and are crucial for sustaining life on Earth.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Forests are often called "Green Lungs" because they produce oxygen and help maintain the balance of gases in the atmosphere.</p>
        </div>
      </section>

      <section id="importance-of-forests">
        <h2>Importance of Forests (Why are they called our Lifeline?)</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Benefit</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Oxygen Production</strong></td>
                <td>Plants release oxygen during photosynthesis, essential for breathing.</td>
              </tr>
              <tr>
                <td><strong>Climate Regulation</strong></td>
                <td>Control global temperatures and influence rainfall patterns.</td>
              </tr>
              <tr>
                <td><strong>Water Cycle Maintenance</strong></td>
                <td>Absorb rainwater, prevent flooding, promote groundwater recharge, purify water.</td>
              </tr>
              <tr>
                <td><strong>Soil and Water Conservation</strong></td>
                <td>Tree roots bind soil, preventing erosion.</td>
              </tr>
              <tr>
                <td><strong>Source of Resources</strong></td>
                <td>Provide wood, fuel, medicines, paper, rubber, etc.</td>
              </tr>
              <tr>
                <td><strong>Wildlife Habitat</strong></td>
                <td>Offer shelter, food, and protection to countless animal species.</td>
              </tr>
              <tr>
                <td><strong>Flood Control</strong></td>
                <td>Act as natural absorbers, allowing rainwater to seep into the ground slowly.</td>
              </tr>
              <tr>
                <td><strong>Air Quality</strong></td>
                <td>Absorb pollutants and carbon dioxide, contributing to cleaner air.</td>
              </tr>
              <tr>
                <td><strong>Noise Reduction</strong></td>
                <td>Thick foliage absorbs sound, reducing noise pollution.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="structure-of-forest">
        <h2>Structure of a Forest</h2>
        <p>
          Forests have different layers formed by various types of plants:
        </p>
        <ul>
          <li><strong>Canopy:</strong> Uppermost layer, formed by branches and leaves of tall trees.</li>
          <li><strong>Understorey:</strong> Below the canopy, formed by shrubs and tall grasses.</li>
          <li><strong>Herb Layer:</strong> Consists of leafy plants, the lowest layer of vegetation.</li>
          <li><strong>Forest Floor:</strong> Ground level, home to mosses, lichens, and decomposers.</li>
        </ul>
      </section>

      <section id="forest-ecosystem">
        <h2>Forest Ecosystem and Food Chains</h2>
        <p>
          Forests are dynamic living entities where all living things depend on each other.
        </p>
        <ul>
          <li><strong>Producers:</strong> Plants (make their own food).</li>
          <li><strong>Consumers:</strong> Herbivores (eat plants), Carnivores (eat animals), Omnivores (eat both).</li>
          <li><strong>Decomposers:</strong> Organisms (bacteria, fungi) that break down dead plants and animals, recycling nutrients back into the soil.</li>
        </ul>
        <div className="memory-trick">
          <h4>Food Chain Example:</h4>
          <p>Grass (Producer) → Deer (Herbivore) → Tiger (Carnivore)</p>
        </div>
      </section>

      <section id="deforestation">
        <h2>Deforestation: A Threat to Forests</h2>
        <p>
          Deforestation is the clearing of forest areas for non-forest purposes, such as agriculture, urbanization, or industrialization.
        </p>
        <h4>Causes of Deforestation:</h4>
        <ul>
          <li><strong>Human Activities:</strong> Agricultural expansion, urbanization, logging, mining, population growth.</li>
          <li><strong>Natural Causes:</strong> Forest fires, natural calamities (floods, cyclones), pests and diseases.</li>
        </ul>
        <h4>Effects of Deforestation:</h4>
        <ul>
          <li>Climate Change (increased CO₂, global warming).</li>
          <li>Loss of Biodiversity (habitat destruction, extinction).</li>
          <li>Soil Erosion and degradation.</li>
          <li>Disruption of Water Cycles (altered rainfall, droughts, floods).</li>
          <li>Resource Depletion.</li>
        </ul>
      </section>

      <section id="conservation-of-forests">
        <h2>Conservation of Forests</h2>
        <p>
          Conserving forests is crucial for protecting biodiversity, maintaining ecological balance, and ensuring natural resources for future generations.
        </p>
        <h4>Methods of Conservation:</h4>
        <ul>
          <li><strong>Afforestation:</strong> Planting new trees.</li>
          <li>Planned Cultivation and Regulating Felling of Trees.</li>
          <li>Preventing Forest Fires and Exploitation.</li>
          <li>Public Awareness and Establishing Protected Areas (national parks, wildlife sanctuaries).</li>
          <li>Recycling Paper.</li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Forests are vital ecosystems providing oxygen, regulating climate, and supporting biodiversity.</li>
          <li>They have a layered structure (canopy, understorey, herb layer, forest floor).</li>
          <li>Food chains and decomposers maintain the forest ecosystem.</li>
          <li>Deforestation (due to human and natural causes) has severe environmental impacts.</li>
          <li>Conservation efforts like afforestation and establishing protected areas are crucial.</li>
        </ul>
      </div>
    </div>
  );
};

export default ForestsOurLifelineNotes;
