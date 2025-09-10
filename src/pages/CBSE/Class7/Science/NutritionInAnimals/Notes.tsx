import React from 'react';
import './Notes.css';

const NutritionInAnimalsNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 2: Nutrition in Animals</h1>

      <section id="introduction">
        <h2>Introduction to Animal Nutrition</h2>
        <p>
          All animals are <strong>heterotrophs</strong>, meaning they obtain their food from other sources, such as plants or other animals. The process of taking in food and utilizing it for energy, growth, and repair is known as <strong>nutrition</strong>.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The mode of taking in food varies in different animals. For example, bees and hummingbirds suck nectar, while snakes swallow their prey whole.</p>
        </div>
      </section>

      <section id="process-of-nutrition">
        <h2>The Process of Nutrition</h2>
        <p>
          Animal nutrition is a multi-step process that includes the following stages:
        </p>
        <ol>
          <li><strong>Ingestion:</strong> The process of taking food into the body.</li>
          <li><strong>Digestion:</strong> The breakdown of complex food components into simpler, soluble substances.</li>
          <li><strong>Absorption:</strong> The process where the digested food is taken up by the body.</li>
          <li><strong>Assimilation:</strong> The utilization of the absorbed nutrients by the body's cells.</li>
          <li><strong>Egestion:</strong> The elimination of undigested waste material from the body.</li>
        </ol>
      </section>

      <section id="human-digestive-system">
        <h2>Human Digestive System</h2>
        <p>
          The human digestive system is a complex network of organs responsible for the digestion and absorption of food. It consists of the alimentary canal (digestive tract) and associated glands.
        </p>
        <div className="diagram-container">
          <h4>The Alimentary Canal</h4>
          <div className="diagram">
            <div className="inputs">Mouth & Buccal Cavity</div>
            <div className="arrow-down">↓</div>
            <div className="plant">Oesophagus (Foodpipe)</div>
            <div className="arrow-down">↓</div>
            <div className="inputs">Stomach</div>
            <div className="arrow-down">↓</div>
            <div className="plant">Small Intestine</div>
            <div className="arrow-down">↓</div>
            <div className="inputs">Large Intestine</div>
            <div className="arrow-down">↓</div>
            <div className="outputs">Rectum & Anus</div>
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Organ</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mouth & Buccal Cavity</strong></td>
                <td>Ingestion of food, chewing by teeth, and mixing with saliva. Saliva contains enzymes that start starch digestion.</td>
              </tr>
              <tr>
                <td><strong>Oesophagus</strong></td>
                <td>Pushes food down to the stomach.</td>
              </tr>
              <tr>
                <td><strong>Stomach</strong></td>
                <td>Secretes mucus, hydrochloric acid, and digestive juices to break down proteins.</td>
              </tr>
              <tr>
                <td><strong>Small Intestine</strong></td>
                <td>Site of complete digestion and absorption of nutrients. Receives secretions from the liver and pancreas.</td>
              </tr>
              <tr>
                <td><strong>Large Intestine</strong></td>
                <td>Absorbs water and some salts from undigested food.</td>
              </tr>
              <tr>
                <td><strong>Rectum & Anus</strong></td>
                <td>Stores and eliminates undigested waste (egestion).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="digestion-in-ruminants">
        <h2>Digestion in Grass-Eating Animals (Ruminants)</h2>
        <p>
          Ruminants like cows and buffaloes have a unique digestive system to digest cellulose in grass.
        </p>
        <ul>
          <li>They quickly swallow food and store it in the <strong>rumen</strong>, where it is partially digested (cud).</li>
          <li>Later, the cud is brought back to the mouth for thorough chewing (<strong>rumination</strong>).</li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>The rumen contains microorganisms that help break down cellulose, which humans cannot digest.</p>
        </div>
      </section>

      <section id="feeding-and-digestion-in-amoeba">
        <h2>Feeding and Digestion in Amoeba</h2>
        <p>
          Amoeba is a single-celled organism with a unique feeding mechanism.
        </p>
        <ul>
          <li>It uses finger-like projections called <strong>pseudopodia</strong> (false feet) to engulf its food.</li>
          <li>The food is enclosed in a <strong>food vacuole</strong>, where digestive juices break it down.</li>
          <li>The digested food is absorbed and used for growth, and the undigested waste is expelled.</li>
        </ul>
        <div className="memory-trick">
          <h4>Remember Pseudopodia!</h4>
          <p>Think of pseudopodia as "false feet" that help Amoeba to catch its food.</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Animal nutrition involves ingestion, digestion, absorption, assimilation, and egestion.</li>
          <li>The human digestive system consists of the alimentary canal and associated glands.</li>
          <li>Ruminants have a specialized digestive system to digest cellulose.</li>
          <li>Amoeba uses pseudopodia to engulf its food.</li>
        </ul>
      </div>
    </div>
  );
};

export default NutritionInAnimalsNotes;
