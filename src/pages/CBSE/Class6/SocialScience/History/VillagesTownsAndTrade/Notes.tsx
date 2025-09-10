import React from 'react';
import './Notes.css';

const VillagesTownsAndTradeNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 8: Villages, Towns and Trade</h1>

      <section id="introduction">
        <h2>Iron Tools and Agriculture</h2>
        <p>
          The use of iron began in the subcontinent around 3000 years ago. Around 2500 years ago, there was an increase in the use of iron tools. These included axes for clearing forests, and iron ploughshares for increasing agricultural production.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Irrigation works like canals, wells, tanks, and artificial lakes were built during this period to increase agricultural output.</p>
        </div>
      </section>

      <section id="villages">
        <h2>Life in Villages</h2>
        <p>
          In the northern part of the country, the village headman was known as the grama bhojaka. He was often the largest landowner, and had slaves and hired workers to cultivate the land. He also functioned as a judge, and sometimes as a policeman.
        </p>
        <p>
          Apart from the grama bhojaka, there were other independent farmers, known as grihapatis, who were smaller landowners. And then there were dasa karmakara, who were landless labourers.
        </p>
        <p>
          In the southern part of the country, large landowners were known as vellalar, ordinary ploughmen as uzhavar, and landless labourers, including slaves, as kadaisiyar and adimai.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>A grama bhojaka would oversee the village, resolve disputes, and ensure agricultural productivity.</p>
        </div>
      </section>

      <section id="towns-and-cities">
        <h2>Towns and Cities</h2>
        <p>
          Many cities developed from about 2500 years ago. These included capitals of mahajanapadas. Some cities were fortified with massive walls.
        </p>
        <p>
          Archaeologists have found rows of pots, or ceramic rings arranged one on top of the other, which are known as ring wells. These seem to have been used as toilets in some cases, and as drains and garbage dumps.
        </p>
        <p>
          Crafts and craftspersons were also important. Many of these cities were centres for the production of fine pottery, especially the Northern Black Polished Ware (NBPW).
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Think of towns as centers of power, trade, and specialized crafts!</p>
        </div>
      </section>

      <section id="trade">
        <h2>Trade and Traders</h2>
        <p>
          Traders carried goods from place to place. They travelled by land and sea. Many seaports were developed along the coasts.
        </p>
        <p>
          Merchants often organised themselves into guilds or shrenis. These shrenis also served as banks, where rich men and women deposited money. This money was invested, and a part of the interest was returned or used to support Buddhist monasteries.
        </p>
        <p>
          Coins were used for transactions. Punch-marked coins, usually rectangular or sometimes square or round in shape, were the earliest coins used for about 500 years.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Increased use of iron tools led to agricultural growth.</li>
          <li>Villages had a hierarchical structure with grama bhojakas, grihapatis, and landless labourers.</li>
          <li>Towns and cities developed as centers of administration, crafts, and trade.</li>
          <li>Trade flourished, with merchants forming guilds and using punch-marked coins.</li>
          <li>Irrigation systems were developed to support agriculture.</li>
        </ul>
      </div>
    </div>
  );
};

export default VillagesTownsAndTradeNotes;
