import React from 'react';
import './Notes.css';

const FibreToFabricNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 3: Fibre to Fabric</h1>

      <section id="introduction">
        <h2>From Fibres to Fabrics</h2>
        <p>
          Have you ever wondered where the clothes you wear come from? They all start as tiny fibres, which are then transformed into the fabrics we use to make clothes and other items.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The journey from a tiny fibre to a beautiful fabric involves several interesting steps!</p>
        </div>
      </section>

      <section id="fibres-and-fabrics">
        <h2>Fibres and Fabrics</h2>
        <ul>
          <li>
            <strong>Fibres:</strong> These are thin, thread-like strands from which fabrics are made. They can be natural or synthetic.
          </li>
          <li>
            <strong>Fabrics:</strong> These are materials made by weaving or knitting fibres together. Examples include cotton cloth, silk saree, woollen sweater.
          </li>
        </ul>
      </section>

      <section id="types-of-fibres">
        <h2>Types of Fibres</h2>
        <h3>1. Natural Fibres:</h3>
        <p>These fibres are obtained from plants or animals.</p>
        <ul>
          <li>
            <strong>Plant Fibres:</strong>
            <ul>
              <li><strong>Cotton:</strong> Obtained from the cotton plant. It grows in black soil and warm climates.</li>
              <li><strong>Jute:</strong> Obtained from the stem of the jute plant. It is mainly grown in rainy seasons in areas like West Bengal, Bihar, and Assam.</li>
            </ul>
          </li>
          <li>
            <strong>Animal Fibres:</strong>
            <ul>
              <li><strong>Wool:</strong> Obtained from the fleece (hair) of animals like sheep, goat, yak, and camel.</li>
              <li><strong>Silk:</strong> Obtained from the cocoons of silkworms. The rearing of silkworms for obtaining silk is called sericulture.</li>
            </ul>
          </li>
        </ul>

        <h3>2. Synthetic Fibres:</h3>
        <p>These are man-made fibres produced from chemical substances.</p>
        <div className="example-box">
          <h4>Examples:</h4>
          <p>Nylon, Polyester, Acrylic are common synthetic fibres.</p>
        </div>
      </section>

      <section id="processes-from-fibre-to-fabric">
        <h2>Processes from Fibre to Fabric</h2>
        <h3>1. Ginning (for Cotton):</h3>
        <p>
          The process of separating cotton fibres from their seeds is called ginning. Traditionally, it was done by hand, but nowadays machines are used.
        </p>
        <h3>2. Spinning:</h3>
        <p>
          The process of making yarn from fibres is called spinning. Fibres are drawn out and twisted together to form yarn. This can be done by hand (using a charkha or hand spindle) or by machines.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of spinning as making a long, continuous thread from many small fibres!</p>
        </div>
        <h3>3. Weaving:</h3>
        <p>
          The process of arranging two sets of yarn together at right angles to make a fabric is called weaving. This is done on looms, which can be hand-operated (handlooms) or power-operated (powerlooms).
        </p>
        <h3>4. Knitting:</h3>
        <p>
          Knitting is a process by which a single yarn is used to make a piece of fabric. Socks, sweaters, and many other clothing items are made from knitted fabrics. It can be done by hand or by machines.
        </p>
      </section>

      <section id="history-of-clothing-material">
        <h2>History of Clothing Material</h2>
        <p>
          In ancient times, people used large leaves, animal skins, or furs to cover themselves. As agricultural communities developed, they learned to weave twigs and grass into mats and baskets. Early Indians wore fabrics made from cotton. The ancient Egyptians used both cotton and flax for making fabrics. Initially, people simply draped fabrics around their bodies as they did not know stitching.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Fibres are thread-like structures, and fabrics are made from them.</li>
          <li>Fibres can be natural (plant: cotton, jute; animal: wool, silk) or synthetic (nylon, polyester).</li>
          <li>Processes like ginning, spinning, weaving, and knitting transform fibres into fabrics.</li>
          <li>Clothing materials have evolved from natural coverings to stitched fabrics.</li>
        </ul>
      </div>
    </div>
  );
};

export default FibreToFabricNotes;
