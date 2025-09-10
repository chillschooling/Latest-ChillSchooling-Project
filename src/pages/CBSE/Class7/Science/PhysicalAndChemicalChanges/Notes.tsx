import React from 'react';
import './Notes.css';

const PhysicalAndChemicalChangesNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 5: Physical and Chemical Changes</h1>

      <section id="introduction">
        <h2>Introduction to Changes Around Us</h2>
        <p>
          Changes are constantly happening around us. These changes can be broadly classified into two main types: Physical Changes and Chemical Changes.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Melting of ice, burning of paper, and rusting of iron are all examples of changes we observe daily.</p>
        </div>
      </section>

      <section id="physical-changes">
        <h2>Physical Changes: Altering Appearance, Not Identity</h2>
        <p>
          A <strong>physical change</strong> is a change in which a substance undergoes alteration only in its physical properties, such as shape, size, colour, or state, without forming any new substance. The chemical composition of the substance remains the same.
        </p>
        <h4>Characteristics of Physical Changes:</h4>
        <ul>
          <li>No new substance is formed.</li>
          <li>Temporary and generally reversible.</li>
          <li>Changes only in physical properties (size, shape, colour, state).</li>
          <li>Little to no energy change.</li>
        </ul>
        <div className="example-box">
          <h4>Examples of Physical Changes:</h4>
          <ul>
            <li>Melting of ice (solid water to liquid water)</li>
            <li>Boiling of water (liquid water to gaseous water)</li>
            <li>Cutting paper (paper remains paper)</li>
            <li>Dissolving sugar in water (sugar is still sugar)</li>
            <li>Crumpling of paper</li>
            <li>Stretching a rubber band</li>
          </ul>
        </div>
      </section>

      <section id="chemical-changes">
        <h2>Chemical Changes: Forming New Substances</h2>
        <p>
          A <strong>chemical change</strong> (also known as a chemical reaction) is a change in which one or more new substances with different chemical properties are formed. This change alters the chemical composition of the substance.
        </p>
        <h4>Characteristics of Chemical Changes:</h4>
        <ul>
          <li>New substance(s) are formed.</li>
          <li>Permanent and usually irreversible.</li>
          <li>Accompanied by energy changes (heat, light, sound).</li>
          <li>May involve change in colour, smell, or formation of gas/precipitate.</li>
        </ul>
        <div className="example-box">
          <h4>Examples of Chemical Changes:</h4>
          <ul>
            <li>Burning of a substance (wood, coal, magnesium ribbon)</li>
            <li>Rusting of iron (iron reacts with oxygen and moisture to form rust)</li>
            <li>Souring of milk (milk changes into curd)</li>
            <li>Digestion of food</li>
            <li>Ripening of fruits</li>
            <li>Mixing baking soda and vinegar (produces carbon dioxide gas)</li>
          </ul>
        </div>
      </section>

      <section id="key-differences">
        <h2>Key Differences Between Physical and Chemical Changes</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Physical Change</th>
                <th>Chemical Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>New Substance</strong></td>
                <td>No new substance is formed.</td>
                <td>One or more new substances are formed.</td>
              </tr>
              <tr>
                <td><strong>Nature</strong></td>
                <td>Temporary.</td>
                <td>Permanent.</td>
              </tr>
              <tr>
                <td><strong>Reversibility</strong></td>
                <td>Generally reversible.</td>
                <td>Usually irreversible.</td>
              </tr>
              <tr>
                <td><strong>Composition</strong></td>
                <td>Chemical composition remains the same.</td>
                <td>Chemical composition changes.</td>
              </tr>
              <tr>
                <td><strong>Energy Change</strong></td>
                <td>Very little energy absorbed or released.</td>
                <td>Significant energy (heat, light) absorbed or released.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="rusting-of-iron">
        <h2>Rusting of Iron: A Chemical Change</h2>
        <p>
          Rusting is a common example of a chemical change. When iron objects are exposed to oxygen in the air and moisture (water), they react to form a reddish-brown flaky substance called rust (iron oxide).
        </p>
        <h4>Prevention of Rusting:</h4>
        <ul>
          <li>Painting</li>
          <li>Greasing/Oiling</li>
          <li>Galvanization (depositing a layer of zinc or chromium metal on iron)</li>
        </ul>
        <div className="memory-trick">
          <h4>Remember Rusting!</h4>
          <p>Rusting needs both oxygen and water. Remove either, and iron won't rust!</p>
        </div>
      </section>

      <section id="crystallisation">
        <h2>Crystallisation: A Physical Process</h2>
        <p>
          Crystallisation is a physical process used to obtain large crystals of a pure substance from its solution. This process is an example of a physical change because no new substance is formed; only the state and form of the substance change.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Pure copper sulphate crystals can be obtained from a copper sulphate solution by heating and then cooling it.</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Physical changes alter physical properties without forming new substances.</li>
          <li>Chemical changes form new substances with different properties.</li>
          <li>Rusting of iron is a chemical change.</li>
          <li>Crystallisation is a physical change.</li>
        </ul>
      </div>
    </div>
  );
};

export default PhysicalAndChemicalChangesNotes;
