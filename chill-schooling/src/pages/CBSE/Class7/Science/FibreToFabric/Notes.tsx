import React from 'react';
import './Notes.css';

const FibreToFabric7Notes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 3: Fibre to Fabric</h1>

      <section id="introduction">
        <h2>From Fibre to Fabric: An Overview</h2>
        <p>
          Fibres are the raw materials used to make fabrics. They are thin, thread-like strands that are spun into yarn, which is then woven or knitted to create the clothes we wear and the textiles we use.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Fibres can be broadly classified into two categories: natural fibres and synthetic fibres.</p>
        </div>
      </section>

      <section id="natural-fibres">
        <h2>Natural Fibres: A Gift from Nature</h2>
        <p>
          Natural fibres are obtained from plant and animal sources.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Fibre</th>
                <th>Source</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Plant Fibres</strong></td>
                <td>Derived from various parts of plants.</td>
                <td>Cotton (from cotton bolls), Jute (from the stem of the jute plant).</td>
              </tr>
              <tr>
                <td><strong>Animal Fibres</strong></td>
                <td>Sourced from animals.</td>
                <td>Wool (from sheep, goats, yaks), Silk (from silkworms).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="wool-production">
        <h2>The Story of Wool: From Sheep to Sweater</h2>
        <p>
          Wool is a warm and insulating fibre obtained from the fleece of animals like sheep, goats, and yaks.
        </p>
        <h4>Processing Wool:</h4>
        <ol>
          <li><strong>Shearing:</strong> The process of removing the fleece from the sheep.</li>
          <li><strong>Scouring:</strong> The sheared fleece is washed to remove grease, dirt, and dust.</li>
          <li><strong>Sorting:</strong> The wool is sorted based on its texture and quality.</li>
          <li><strong>Removing Burrs:</strong> Small, fluffy fibres called burrs are picked out.</li>
          <li><strong>Dyeing:</strong> The fibres are dyed in various colours.</li>
          <li><strong>Spinning and Rolling:</strong> The fibres are straightened, combed, and rolled into yarn.</li>
        </ol>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Selective breeding is used to raise sheep that produce high-quality, soft wool.</p>
        </div>
      </section>

      <section id="silk-production">
        <h2>The Secret of Silk: From Silkworm to Sari</h2>
        <p>
          Silk is a luxurious natural fibre obtained from the cocoons of silkworms. The rearing of silkworms for silk production is known as <strong>sericulture</strong>.
        </p>
        <h4>The Life Cycle of a Silkworm:</h4>
        <ol>
          <li><strong>Egg:</strong> The female silk moth lays eggs on mulberry leaves.</li>
          <li><strong>Larva (Caterpillar):</strong> The eggs hatch into larvae, which feed on mulberry leaves.</li>
          <li><strong>Pupa (Cocoon):</strong> The larva spins a cocoon of silk fibres around itself.</li>
          <li><strong>Moth:</strong> The pupa develops into a moth and emerges from the cocoon.</li>
        </ol>
        <h4>From Cocoon to Cloth:</h4>
        <ul>
          <li><strong>Boiling:</strong> Cocoons are boiled to kill the pupa and loosen the silk fibres.</li>
          <li><strong>Reeling:</strong> The process of taking out threads from the cocoon.</li>
          <li><strong>Spinning:</strong> The silk fibres are spun into silk threads.</li>
          <li><strong>Weaving:</strong> The silk yarn is woven into silk fabric.</li>
        </ul>
        <div className="memory-trick">
          <h4>Remember Sericulture!</h4>
          <p>Think of "seri" as in silk, and "culture" as in cultivation. Sericulture is the cultivation of silk!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Fibres are the basic units of fabrics.</li>
          <li>Natural fibres are obtained from plants and animals.</li>
          <li>Wool is obtained from the fleece of sheep and other animals.</li>
          <li>Silk is obtained from the cocoons of silkworms.</li>
          <li>The process of making fabric from fibre involves spinning, weaving, and knitting.</li>
        </ul>
      </div>
    </div>
  );
};

export default FibreToFabricNotes;
