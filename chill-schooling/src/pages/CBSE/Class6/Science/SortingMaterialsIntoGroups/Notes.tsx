import React from 'react';
import './Notes.css';

const SortingMaterialsIntoGroupsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 4: Sorting Materials into Groups</h1>

      <section id="introduction">
        <h2>Why Do We Sort Materials?</h2>
        <p>
          Around us, we see a vast variety of objects. These objects are made of different materials. Sorting materials into groups helps us to study their properties easily and also to understand their uses better.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Even in ancient times, people sorted things! Early humans grouped objects based on whether they were edible or not, or safe to use!</p>
        </div>
      </section>

      <section id="materials-and-objects">
        <h2>Materials and Objects</h2>
        <p>
          An object can be made of a single material or multiple materials. Similarly, a single material can be used to make different objects.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <ul>
            <li>A chair can be made of wood, plastic, metal, or a combination.</li>
            <li>Wood can be used to make chairs, tables, doors, and toys.</li>
          </ul>
        </div>
      </section>

      <section id="properties-of-materials">
        <h2>Properties of Materials</h2>
        <p>Materials are grouped based on their properties. Let's explore some key properties:</p>

        <h3>1. Appearance:</h3>
        <p>
          Materials can look different from each other. They can be shiny or dull, smooth or rough.
        </p>
        <ul>
          <li>
            <strong>Lustre:</strong> Materials that have a shine are called lustrous. Metals like gold, silver, copper, and iron are lustrous.
          </li>
          <li>
            <strong>Non-lustrous:</strong> Materials that do not have a shine, like wood or plastic.
          </li>
        </ul>

        <h3>2. Hardness:</h3>
        <p>
          Materials can be hard or soft. Hard materials are difficult to compress, cut, or scratch, while soft materials are easy to compress or scratch.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Iron is hard, while cotton and sponge are soft.</p>
        </div>

        <h3>3. Solubility:</h3>
        <p>
          This property tells us whether a material dissolves in water or not.
        </p>
        <ul>
          <li>
            <strong>Soluble:</strong> Materials that dissolve completely in water. (e.g., salt, sugar)
          </li>
          <li>
            <strong>Insoluble:</strong> Materials that do not dissolve in water. (e.g., sand, chalk powder)
          </li>
        </ul>

        <h3>4. Floatation (Buoyancy):</h3>
        <p>
          Some materials float on water, while others sink. This depends on their density.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>A dry leaf floats on water, while a stone sinks.</p>
        </div>

        <h3>5. Transparency:</h3>
        <p>
          This property describes how much light can pass through a material.
        </p>
        <ul>
          <li>
            <strong>Transparent:</strong> Materials that allow light to pass through them completely, so you can see clearly through them. (e.g., glass, clear water, air)
          </li>
          <li>
            <strong>Translucent:</strong> Materials that allow some light to pass through them, but you cannot see clearly through them. Objects appear blurry. (e.g., oily paper, frosted glass)
          </li>
          <li>
            <strong>Opaque:</strong> Materials that do not allow any light to pass through them. You cannot see through them at all. (e.g., wood, metal, cardboard)
          </li>
        </ul>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a window: if it's clear, it's <strong>Transparent</strong>. If it's foggy, it's <strong>Translucent</strong>. If it's a wall, it's <strong>Opaque</strong>!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Objects are made of different materials, and materials can be used to make different objects.</li>
          <li>Materials are grouped based on properties like appearance (lustre), hardness, solubility, floatation, and transparency.</li>
          <li>Transparent, translucent, and opaque describe how light passes through materials.</li>
          <li>Sorting helps us understand materials better and use them effectively.</li>
        </ul>
      </div>
    </div>
  );
};

export default SortingMaterialsIntoGroupsNotes;
