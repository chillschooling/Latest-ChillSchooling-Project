import React from 'react';
import './Notes.css';

const TheLivingOrganismsAndTheirSurroundingsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 9: The Living Organisms and Their Surroundings</h1>

      <section id="introduction">
        <h2>Life All Around Us</h2>
        <p>
          From the highest mountains to the deepest oceans, life exists everywhere. Living organisms interact with each other and with their non-living surroundings. This chapter explores how organisms live in different places and adapt to their environment.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Even in extremely hot places like volcanic vents, some unique organisms thrive!</p>
        </div>
      </section>

      <section id="habitat-and-adaptation">
        <h2>Habitat and Adaptation</h2>

        <h3>Habitat:</h3>
        <p>
          The specific place or surrounding where an organism lives is called its habitat. A habitat provides food, water, air, shelter, and other necessities to organisms.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>The habitat of a fish is water. The habitat of a camel is the desert.</p>
        </div>

        <h3>Adaptation:</h3>
        <p>
          The presence of specific features or certain habits, which enable a plant or an animal to live in its surroundings, is called adaptation. Adaptations develop over thousands of years.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of <strong>Habitat</strong> as a home, and <strong>Adaptation</strong> as special skills to live in that home!</p>
        </div>
      </section>

      <section id="components-of-habitat">
        <h2>Components of a Habitat</h2>
        <p>A habitat consists of two main types of components:</p>
        <ul>
          <li>
            <strong>Biotic Components:</strong> These are the living things in a habitat, such as plants, animals, and microorganisms.
          </li>
          <li>
            <strong>Abiotic Components:</strong> These are the non-living things in a habitat, such as rocks, soil, air, water, sunlight, and heat.
          </li>
        </ul>
      </section>

      <section id="characteristics-of-living-organisms">
        <h2>Characteristics of Living Organisms</h2>
        <p>All living organisms share some common characteristics that distinguish them from non-living things:</p>
        <ul>
          <li>
            <strong>Need for Food:</strong> All living things need food for energy and growth.
          </li>
          <li>
            <strong>Growth:</strong> Living organisms grow and develop over time.
          </li>
          <li>
            <strong>Movement:</strong> Living organisms show some form of movement (e.g., animals walk, plants grow towards light).
          </li>
          <li>
            <strong>Response to Stimuli:</strong> Living organisms react to changes in their surroundings (stimuli).
          </li>
          <li>
            <strong>Respiration:</strong> All living things breathe to release energy from food.
          </li>
          <li>
            <strong>Excretion:</strong> Living organisms remove waste products from their bodies.
          </li>
          <li>
            <strong>Reproduction:</strong> Living organisms produce more of their own kind.
          </li>
          <li>
            <strong>Definite Lifespan:</strong> All living organisms have a certain period for which they live.
          </li>
        </ul>
      </section>

      <section id="types-of-habitats-and-adaptations">
        <h2>Types of Habitats and Adaptations</h2>

        <h3>1. Terrestrial Habitats (Land):</h3>
        <ul>
          <li>
            <strong>Deserts:</strong> Very hot and dry.
            <div className="example-box">
              <h4>Adaptations:</h4>
              <p><strong>Camels:</strong> Long legs to keep body away from hot sand, excrete less urine, dry dung, don't sweat much to conserve water.</p>
              <p><strong>Cactus:</strong> Leaves modified into spines to reduce water loss, thick waxy stem to store water, deep roots.</p>
            </div>
          </li>
          <li>
            <strong>Mountain Regions:</strong> Cold and windy.
            <div className="example-box">
              <h4>Adaptations:</h4>
              <p><strong>Trees:</strong> Cone-shaped with sloping branches, needle-like leaves to shed snow easily.</p>
              <p><strong>Animals (Yak, Snow Leopard):</strong> Thick fur to protect from cold, strong hooves for climbing.</p>
            </div>
          </li>
        </ul>

        <h3>2. Aquatic Habitats (Water):</h3>
        <ul>
          <li>
            <strong>Oceans:</strong> Salty water.
            <div className="example-box">
              <h4>Adaptations:</h4>
              <p><strong>Fish:</strong> Streamlined body, slippery scales, gills for breathing dissolved oxygen.</p>
            </div>
          </li>
          <li>
            <strong>Ponds and Lakes:</strong> Freshwater.
            <div className="example-box">
              <h4>Adaptations:</h4>
              <p><strong>Aquatic Plants:</strong> Roots reduced in size (main function is to hold plant in place), stems long and hollow, leaves and flowers float on surface.</p>
            </div>
          </li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Habitat is where an organism lives; adaptation is how it survives there.</li>
          <li>Habitats have biotic (living) and abiotic (non-living) components.</li>
          <li>Living organisms grow, move, need food, respond to stimuli, respire, excrete, and reproduce.</li>
          <li>Organisms show specific adaptations to terrestrial (deserts, mountains) and aquatic (oceans, ponds) habitats.</li>
        </ul>
      </div>
    </div>
  );
};

export default TheLivingOrganismsAndTheirSurroundingsNotes;
