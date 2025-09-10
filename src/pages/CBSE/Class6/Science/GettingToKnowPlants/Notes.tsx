import React from 'react';
import './Notes.css';

const GettingToKnowPlantsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 7: Getting to Know Plants</h1>

      <section id="introduction">
        <h2>The Wonderful World of Plants</h2>
        <p>
          Plants are all around us, from tiny grasses to giant trees. They are essential for life on Earth, providing us with food, oxygen, and many other things. Let's explore the different types of plants and their parts.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Some plants can even grow without soil, getting all their nutrients from the air and water!</p>
        </div>
      </section>

      <section id="types-of-plants">
        <h2>Types of Plants</h2>
        <p>Plants can be broadly classified into three main categories based on their stem, size, and branching patterns:</p>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Description</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Herbs</strong></td>
              <td>Small plants with soft, green, and tender stems. They usually have few branches or none.</td>
              <td>Wheat, Paddy, Mint, Coriander</td>
            </tr>
            <tr>
              <td><strong>Shrubs</strong></td>
              <td>Medium-sized plants with hard, woody stems that branch out near the base of the stem.</td>
              <td>Lemon, Rose, Jasmine, Tulsi</td>
            </tr>
            <tr>
              <td><strong>Trees</strong></td>
              <td>Tall and large plants with thick, hard, woody stems (trunks) that branch out higher up from the ground.</td>
              <td>Mango, Neem, Banyan, Peepal</td>
            </tr>
          </tbody>
        </table>
        <h3>Other Types:</h3>
        <ul>
          <li>
            <strong>Creepers:</strong> Plants with weak stems that cannot stand upright and spread on the ground. (e.g., Pumpkin, Watermelon, Sweet Potato)
          </li>
          <li>
            <strong>Climbers:</strong> Plants with weak stems that take support from neighboring structures to climb up. (e.g., Money Plant, Grapevine, Pea Plant)
          </li>
        </ul>
      </section>

      <section id="parts-of-a-plant">
        <h2>Parts of a Plant and Their Functions</h2>
        <p>A typical plant has several parts, each with a specific function:</p>

        <h3>1. Root System:</h3>
        <p>
          The part of the plant that usually grows below the ground. Roots anchor the plant firmly to the soil and absorb water and minerals from the soil.
        </p>
        <ul>
          <li>
            <strong>Taproot:</strong> Has one main thick root with smaller side roots branching off. (e.g., Carrot, Radish, Mustard)
          </li>
          <li>
            <strong>Fibrous Root:</strong> Consists of a cluster of thin, bushy roots originating from the base of the stem. (e.g., Wheat, Maize, Grass)
          </li>
        </ul>

        <h3>2. Shoot System:</h3>
        <p>
          The part of the plant that usually grows above the ground, consisting of the stem, leaves, flowers, and fruits.
        </p>
        <ul>
          <li>
            <strong>Stem:</strong> Supports the plant, transports water and minerals from roots to leaves, and food from leaves to other parts of the plant.
          </li>
          <li>
            <strong>Leaf:</strong> The food factory of the plant. Leaves perform photosynthesis (making food using sunlight, water, and carbon dioxide) and transpiration (release of excess water as vapor).
            <ul>
              <li><strong>Petiole:</strong> The stalk that joins the leaf to the stem.</li>
              <li><strong>Lamina:</strong> The broad, flat, green part of the leaf.</li>
              <li><strong>Veins:</strong> The lines on the leaf. The prominent line in the middle is called the midrib.</li>
            </ul>
          </li>
          <li>
            <strong>Flower:</strong> The reproductive part of the plant. Flowers develop into fruits, which contain seeds.
            <ul>
              <li><strong>Sepals:</strong> Small, green, leaf-like structures that protect the bud.</li>
              <li><strong>Petals:</strong> Often brightly colored to attract insects for pollination.</li>
              <li><strong>Stamen:</strong> The male reproductive part, consisting of anther and filament.</li>
              <li><strong>Pistil (or Carpel):</strong> The female reproductive part, consisting of stigma, style, and ovary. The ovary contains ovules.</li>
            </ul>
          </li>
        </ul>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Remember the parts of a flower like a house: Sepals are the foundation, Petals are the colorful walls, Stamens are the male residents, and the Pistil is the female resident with the baby (ovules)!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Plants are classified into herbs, shrubs, and trees based on their characteristics.</li>
          <li>Creepers and climbers are plants with weak stems.</li>
          <li>The main parts of a plant are roots, stem, leaves, and flowers, each with specific functions.</li>
          <li>Roots absorb water and minerals; stems transport substances; leaves make food; and flowers are for reproduction.</li>
        </ul>
      </div>
    </div>
  );
};

export default GettingToKnowPlantsNotes;
