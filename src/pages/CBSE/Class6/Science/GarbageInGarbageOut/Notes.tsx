import React from 'react';
import './Notes.css';

const GarbageInGarbageOutNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 16: Garbage In, Garbage Out</h1>

      <section id="introduction">
        <h2>What is Garbage?</h2>
        <p>
          Every day, we generate a lot of waste from our homes, schools, and offices. This waste, which is no longer useful and has been discarded, is called garbage. If not managed properly, garbage can make our surroundings dirty and unhealthy.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Garbage can attract pests like flies and rats, which can spread diseases!</p>
        </div>
      </section>

      <section id="types-of-garbage">
        <h2>Types of Garbage</h2>
        <p>
          Garbage can be broadly classified into two types:
        </p>
        <ul>
          <li>
            <strong>Biodegradable Waste:</strong> This type of waste can rot or decompose naturally to form harmless substances. It includes plant and animal waste.
            <div className="example-box">
              <h4>Examples:</h4>
              <p>Fruit and vegetable peels, leftover food, paper, leaves, cotton.</p>
            </div>
          </li>
          <li>
            <strong>Non-biodegradable Waste:</strong> This type of waste does not rot or decompose naturally. It remains in the environment for a very long time.
            <div className="example-box">
              <h4>Examples:</h4>
              <p>Plastics, glass, metal objects.</p>
            </div>
          </li>
        </ul>
      </section>

      <section id="waste-management">
        <h2>Waste Management</h2>
        <p>
          Proper management of garbage is crucial for a clean and healthy environment. Here are some methods:
        </p>

        <h3>1. Landfills:</h3>
        <p>
          Garbage collected from different places is often taken to large, low-lying open areas called landfills. Here, useful materials are separated, and the rest of the garbage is spread and covered with a layer of soil. Once a landfill is full, it is often converted into a park or playground.
        </p>

        <h3>2. Composting:</h3>
        <p>
          Composting is a natural method of converting biodegradable waste (like kitchen and food waste) into nutrient-rich manure for plants. This can be done by making a pit and allowing microorganisms to decompose the waste.
        </p>
        <div className="example-box">
          <h4>Vermicomposting:</h4>
          <p>A method of preparing compost with the help of red worms, which makes the compost very rich in nutrients.</p>
        </div>

        <h3>3. The 3 Rs: Reduce, Reuse, Recycle</h3>
        <p>
          This is a very important principle for managing waste effectively.
        </p>
        <ul>
          <li>
            <strong>Reduce:</strong> Minimize the amount of waste you generate. Buy only what you need.
          </li>
          <li>
            <strong>Reuse:</strong> Find ways to use items multiple times instead of throwing them away. (e.g., use old newspapers as book covers, reuse plastic containers)
          </li>
          <li>
            <strong>Recycle:</strong> Process used materials into new products to prevent waste. (e.g., recycling paper, plastic, glass, and metal)
          </li>
        </ul>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of the 3 Rs as a cycle: <strong>R</strong>educe what you use, <strong>R</strong>euse what you can, and <strong>R</strong>ecycle the rest!</p>
        </div>
      </section>

      <section id="the-problem-with-plastics">
        <h2>The Problem with Plastics</h2>
        <p>
          Plastics are non-biodegradable and pose a significant threat to the environment. They do not decompose easily and can remain in the environment for hundreds of years.
        </p>
        <ul>
          <li>Burning plastics releases toxic gases that pollute the air.</li>
          <li>Plastics can choke drains, leading to waterlogging.</li>
          <li>Animals may accidentally eat plastics and get sick or die.</li>
          <li>Plastics buried in the soil can pollute it.</li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Garbage is discarded waste, classified as biodegradable or non-biodegradable.</li>
          <li>Waste management methods include landfills and composting.</li>
          <li>The 3 Rs (Reduce, Reuse, Recycle) are crucial for effective waste management.</li>
          <li>Plastics are a major environmental concern due to their non-biodegradable nature.</li>
        </ul>
      </div>
    </div>
  );
};

export default GarbageInGarbageOutNotes;
