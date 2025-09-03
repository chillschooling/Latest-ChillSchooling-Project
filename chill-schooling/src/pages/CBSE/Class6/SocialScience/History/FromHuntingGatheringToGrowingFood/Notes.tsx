import React from 'react';
import './Notes.css';

const FromHuntingGatheringToGrowingFoodNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 2: From Hunting – Gathering to Growing Food</h1>

      <section id="introduction">
        <h2>The Earliest People: Hunter-Gatherers</h2>
        <p>
          People who lived in the subcontinent as early as two million years ago are known as hunter-gatherers. They got their food by hunting wild animals, catching fish and birds, gathering fruits, roots, nuts, seeds, leaves, and eggs.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Hunter-gatherers moved from place to place for four main reasons: to find more food, to follow animal movements, to find water, and to escape harsh weather.</p>
        </div>
      </section>

      <section id="tools-and-sites">
        <h2>Tools and Living Sites</h2>
        <p>
          Hunter-gatherers made and used tools of stone, wood, and bone. Stone tools were used to cut meat and bone, scrape bark (from trees) and hides (animal skins), chop fruit, and roots. Some tools were attached to handles of bone or wood to make spears and arrows for hunting.
        </p>
        <p>
          Many sites were located near sources of water, such as rivers and lakes. As stone tools were important, people tried to find places where good quality stone was easily available. These places are called factory sites.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Bhimbetka (in present-day Madhya Pradesh) is an old site with caves and rock shelters. People chose these natural caves because they provided shelter from the rain, heat, and wind. Rock paintings are found in these shelters.</p>
        </div>
      </section>

      <section id="fire-and-climate-change">
        <h2>Discovery of Fire and Changing Environment</h2>
        <p>
          Traces of ash have been found in the Kurnool Caves, suggesting that people were familiar with the use of fire. Fire could have been used for many things: as a source of light, to cook meat, and to scare away animals.
        </p>
        <p>
          Around 12,000 years ago, there were major changes in the climate of the world, leading to a shift to relatively warm conditions. This led to the development of grasslands in many areas. This in turn led to an increase in the number of deer, antelope, goat, sheep and cattle, i.e. animals that survived on grass.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of fire as a turning point: warmth, light, cooking, and protection!</p>
        </div>
      </section>

      <section id="beginning-of-farming">
        <h2>The Beginning of Farming and Herding</h2>
        <p>
          As the climate changed, people started observing animals and plants more closely. This led them to think about growing plants and taming animals themselves. This was the beginning of farming and herding.
        </p>
        <ul>
          <li><strong>Farming:</strong> People learned to grow crops like wheat, barley, rice, and pulses. This meant they no longer had to move constantly in search of food.</li>
          <li><strong>Herding:</strong> People began to tame animals like dogs, sheep, goats, and cattle. These animals provided milk, meat, and could also be used for transport.</li>
        </ul>
        <p>
          This shift from a nomadic (moving from place to place) lifestyle to a settled life is a major turning point in human history. It led to the development of villages and eventually, civilizations.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Hunter-gatherers were the earliest people, moving for food, water, and shelter.</li>
          <li>They used stone, wood, and bone tools for various tasks.</li>
          <li>The discovery of fire was a significant development.</li>
          <li>Climate change led to grasslands and an increase in herbivorous animals.</li>
          <li>The shift from hunting-gathering to farming and herding marked a major change in human history, leading to settled life.</li>
        </ul>
      </div>
    </div>
  );
};

export default FromHuntingGatheringToGrowingFoodNotes;
