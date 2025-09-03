import React from 'react';
import './Notes.css';

const SeparationOfSubstancesNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 5: Separation of Substances</h1>

      <section id="introduction">
        <h2>Why Separate Substances?</h2>
        <p>
          In our daily life, we often come across mixtures of substances. Sometimes, we need to separate useful components from a mixture, or remove undesirable substances. For example, we separate tea leaves from tea, or stones from rice.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Many of the foods we eat, like rice and pulses, are cleaned by separating unwanted particles before cooking!</p>
        </div>
      </section>

      <section id="methods-of-separation">
        <h2>Methods of Separation</h2>
        <p>Different methods are used to separate substances based on their properties.</p>

        <h3>1. Handpicking:</h3>
        <p>
          This method is used to separate slightly larger impurities like pieces of dirt, stone, and husk from wheat, rice, or pulses. It is suitable when the quantity of the impurity is not very large.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Separating small stones from rice before cooking.</p>
        </div>

        <h3>2. Threshing:</h3>
        <p>
          The process that is used to separate grain from stalks is threshing. In this process, the stalks are beaten to free the grain seeds. Threshing is done with the help of machines or by bullocks.
        </p>

        <h3>3. Winnowing:</h3>
        <p>
          This method is used to separate heavier and lighter components of a mixture by wind or by blowing air. Farmers use this method to separate lighter husk particles from heavier grain seeds.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of winnowing as letting the wind do the work to blow away the lighter stuff!</p>
        </div>

        <h3>4. Sieving:</h3>
        <p>
          Sieving is used to separate components of a mixture that have different sizes. A sieve is a device with small holes. Smaller particles pass through the holes, while larger particles remain on the sieve.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Separating flour from bran, or pebbles from sand at a construction site.</p>
        </div>

        <h3>5. Sedimentation, Decantation, and Filtration:</h3>
        <ul>
          <li>
            <strong>Sedimentation:</strong> When the heavier component in a mixture settles down after water is added to it, the process is called sedimentation. (e.g., sand settling in water)
          </li>
          <li>
            <strong>Decantation:</strong> After sedimentation, the water (or other liquid) is removed by gently pouring it without disturbing the settled sediment. This process is called decantation.
          </li>
          <li>
            <strong>Filtration:</strong> This method is used to separate insoluble solids from a liquid using a filter paper or a strainer.
          </li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Separating mud from water: First, mud settles (sedimentation), then clear water is poured out (decantation). For finer particles, filtering through a cloth or filter paper (filtration) can be used.</p>
        </div>

        <h3>6. Evaporation:</h3>
        <p>
          The process of conversion of water into its vapour is called evaporation. This method is used to separate a soluble solid from a liquid. For example, salt is obtained from seawater by evaporation.
        </p>
        <h3>7. Condensation:</h3>
        <p>
          The process of conversion of water vapour into its liquid form is called condensation. This is the reverse of evaporation.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Substances are separated to obtain useful components or remove undesirable ones.</li>
          <li>Common methods include handpicking, threshing, winnowing, sieving, sedimentation, decantation, filtration, and evaporation.</li>
          <li>Each method is suitable for different types of mixtures based on the properties of their components.</li>
        </ul>
      </div>
    </div>
  );
};

export default SeparationOfSubstancesNotes;
