import React from 'react';
import './Notes.css';

const ChangesAroundUsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 6: Changes Around Us</h1>

      <section id="introduction">
        <h2>Everything Changes!</h2>
        <p>
          Our world is full of changes! From the growth of a tiny seed into a big tree to the changing of seasons, changes are happening all the time around us. Some changes are temporary, while others are permanent.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Even you are constantly changing! Your hair grows, your nails grow, and you grow taller!</p>
        </div>
      </section>

      <section id="reversible-and-irreversible-changes">
        <h2>Reversible and Irreversible Changes</h2>

        <h3>1. Reversible Changes:</h3>
        <p>
          These are changes that can be undone or reversed. The substance involved can return to its original state.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <ul>
            <li>Melting of ice: Ice (solid) melts into water (liquid), and water can be frozen back into ice.</li>
            <li>Folding a paper: You can unfold the paper back to its original state.</li>
            <li>Stretching a rubber band: It returns to its original shape when released.</li>
            <li>Inflating a balloon: You can deflate it.</li>
          </ul>
        </div>

        <h3>2. Irreversible Changes:</h3>
        <p>
          These are changes that cannot be undone or reversed. Once the change occurs, the substance cannot return to its original state.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <ul>
            <li>Burning of paper: Once paper is burnt, it turns into ash and cannot be changed back into paper.</li>
            <li>Cooking food: Once food is cooked, it cannot be changed back to its raw form.</li>
            <li>Ripening of a fruit: A ripe fruit cannot become unripe again.</li>
            <li>Growth of a plant: A plant cannot shrink back to a seed.</li>
          </ul>
        </div>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of a <strong>Reversible</strong> change as a two-way street, and an <strong>Irreversible</strong> change as a one-way street!</p>
        </div>
      </section>

      <section id="physical-and-chemical-changes">
        <h2>Physical and Chemical Changes</h2>

        <h3>1. Physical Changes:</h3>
        <p>
          These changes only affect the physical properties of a substance (like its state, shape, or size) but do not alter its chemical identity. No new substance is formed. Most physical changes are reversible.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Melting of wax, tearing of paper, breaking of glass, dissolving sugar in water.</p>
        </div>

        <h3>2. Chemical Changes:</h3>
        <p>
          These changes involve a change in the chemical composition of a substance, leading to the formation of one or more new substances with different properties. Chemical changes are generally irreversible.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Burning of wood, rusting of iron, cooking an egg, digestion of food.</p>
        </div>
      </section>

      <section id="expansion-and-contraction">
        <h2>Expansion and Contraction</h2>
        <p>
          Many materials expand (get bigger) when heated and contract (get smaller) when cooled. This property is used in many practical applications.
        </p>
        <div className="example-box">
          <h4>Examples:</h4>
          <ul>
            <li>Iron rims are fitted on wooden wheels by heating the rim, which makes it expand. It then shrinks and fits tightly when cooled.</li>
            <li>Gaps are left between railway tracks to allow for expansion in summer.</li>
          </ul>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Changes around us can be reversible (can be undone) or irreversible (cannot be undone).</li>
          <li>Physical changes alter physical properties, while chemical changes form new substances.</li>
          <li>Materials expand on heating and contract on cooling.</li>
        </ul>
      </div>
    </div>
  );
};

export default ChangesAroundUsNotes;
