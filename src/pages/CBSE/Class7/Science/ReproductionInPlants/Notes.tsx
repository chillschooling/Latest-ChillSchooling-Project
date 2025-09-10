import React from 'react';
import './Notes.css';

const ReproductionInPlantsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 8: Reproduction in Plants</h1>

      <section id="introduction">
        <h2>Introduction to Reproduction</h2>
        <p>
          Reproduction is the process by which living organisms produce new individuals of their own kind. It is essential for the continuity of a species. Plants, like all living organisms, reproduce to ensure their survival and the continuation of their species.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Plants reproduce by two main modes: Asexual Reproduction and Sexual Reproduction.</p>
        </div>
      </section>

      <section id="asexual-reproduction">
        <h2>Asexual Reproduction: Without Seeds</h2>
        <p>
          Asexual reproduction is a mode of reproduction in which new plants are produced without the involvement of seeds or the fusion of male and female gametes. Only a single parent is involved, and the new individuals are exact copies of the parent plant.
        </p>
        <h4>Methods of Asexual Reproduction:</h4>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Vegetative Propagation</strong></td>
                <td>New plants are produced from vegetative parts (roots, stems, leaves, buds).</td>
                <td>Potatoes (stems), Bryophyllum (leaves)</td>
              </tr>
              <tr>
                <td><strong>Budding</strong></td>
                <td>A small bud-like outgrowth appears on the parent, grows, detaches, and forms a new individual.</td>
                <td>Yeast</td>
              </tr>
              <tr>
                <td><strong>Fragmentation</strong></td>
                <td>The parent body breaks into fragments, each developing into a new individual.</td>
                <td>Spirogyra (algae)</td>
              </tr>
              <tr>
                <td><strong>Spore Formation</strong></td>
                <td>Reproduction through tiny, lightweight reproductive bodies called spores.</td>
                <td>Fungi (bread mould), Mosses, Ferns</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="example-box">
          <h4>Advantage of Vegetative Propagation:</h4>
          <p>Plants produced by vegetative propagation grow faster and bear flowers and fruits earlier.</p>
        </div>
      </section>

      <section id="sexual-reproduction">
        <h2>Sexual Reproduction: With Seeds and Flowers</h2>
        <p>
          Sexual reproduction involves the fusion of male and female gametes (sex cells) to form a new individual. This process typically involves flowers, which are the reproductive parts of a plant, and results in the formation of seeds.
        </p>
        <h4>Parts of a Flower (Reproductive Organs):</h4>
        <ul>
          <li><strong>Stamen (Male Part):</strong> Consists of Anther (produces pollen) and Filament.</li>
          <li><strong>Pistil / Carpel (Female Part):</strong> Consists of Stigma (receives pollen), Style, and Ovary (contains ovules with egg cells).</li>
        </ul>
        <div className="memory-trick">
          <h4>Remember Flower Parts!</h4>
          <p>Stamen = STAM-ina (male part). Pistil = PIST-ol (female part, like a gun, but for plants!)</p>
        </div>
        <h4>Pollination:</h4>
        <p>
          The process of transfer of pollen grains from the anther to the stigma of a flower.
        </p>
        <ul>
          <li><strong>Self-pollination:</strong> Pollen transferred within the same flower or to another flower on the same plant.</li>
          <li><strong>Cross-pollination:</strong> Pollen transferred from one plant to another plant of the same kind.</li>
        </ul>
        <div className="example-box">
          <h4>Agents of Pollination:</h4>
          <p>Wind, water, insects (bees, butterflies), and other animals help in pollination.</p>
        </div>
        <h4>Fertilization:</h4>
        <p>
          The fusion of male gamete (from pollen) with the female gamete (egg cell in ovule) to form a <strong>zygote</strong>. The zygote then develops into an embryo.
        </p>
        <h4>Fruit and Seed Formation:</h4>
        <ul>
          <li>The <strong>ovary</strong> develops into the <strong>fruit</strong>.</li>
          <li>The <strong>ovules</strong> develop into <strong>seeds</strong>.</li>
          <li>Each seed contains an <strong>embryo</strong> (a baby plant).</li>
        </ul>
      </section>

      <section id="seed-dispersal">
        <h2>Seed Dispersal</h2>
        <p>
          Seeds and fruits are dispersed (scattered) away from the parent plant by various means like wind, water, and animals. This helps in the growth of new plants in different places and prevents overcrowding.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Reproduction is essential for species continuity.</li>
          <li>Plants reproduce asexually (vegetative propagation, budding, fragmentation, spores) and sexually (involving flowers, pollination, fertilization, seeds).</li>
          <li>Flowers contain male (stamen) and female (pistil) reproductive parts.</li>
          <li>Pollination is pollen transfer; fertilization is gamete fusion.</li>
          <li>Ovary becomes fruit, ovules become seeds.</li>
          <li>Seed dispersal helps in spreading plants.</li>
        </ul>
      </div>
    </div>
  );
};

export default ReproductionInPlantsNotes;
