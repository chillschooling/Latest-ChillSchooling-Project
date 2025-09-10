import React from 'react';
import './Notes.css';

const OurCountryIndiaNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 6: Our Country – India</h1>

      <section id="introduction">
        <h2>India: A Land of Diversity</h2>
        <p>
          India is a country of vast geographical expanse. In the north, it is bound by the lofty Himalayas, the Arabian Sea in the west, the Bay of Bengal in the east and the Indian Ocean in the south. India has an area of about 3.28 million sq. km. The north-south extent from Kashmir to Kanyakumari is about 3,200 km. And the east-west extent from Arunachal Pradesh to Kuchchh is about 2,900 km.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>India is the seventh largest country in the world in terms of area and second most populous country in the world.</p>
        </div>
      </section>

      <section id="location-and-size">
        <h2>Location and Size</h2>
        <p>
          India is located in the Northern Hemisphere. The Tropic of Cancer (23°30'N) passes almost halfway through the country. From south to north, main land of India extends between 8°4'N and 37°6'N latitudes. From west to east, India extends between 68°7'E and 97°25'E longitudes.
        </p>
        <p>
          Due to the great longitudinal extent of about 29°, the local time changes by two hours as one moves from Gujarat to Arunachal Pradesh. The local time of longitude 82°30'E has been taken as the Indian Standard Time (IST). This meridian is also known as the Standard Meridian of India.
        </p>
      </section>

      <section id="physical-divisions">
        <h2>Physical Divisions</h2>
        <p>India is marked by a diversity of physical features such as mountains, plateaus, plains, coasts and islands.</p>
        <h3>1. The Himalayas:</h3>
        <p>
          The Himalayas are the highest and the most rugged mountains in the world. They are divided into three main parallel ranges: the Great Himalaya or Himadri (northernmost), the Middle Himalaya or Himachal, and the Shiwalik (southernmost).
        </p>
        <h3>2. The Northern Plains:</h3>
        <p>
          The Northern Indian Plains lie to the south of the Himalayas. They are generally flat and level. These are formed by the alluvial deposits laid down by the rivers—the Indus, the Ganga, the Brahmaputra and their tributaries. These plains provide fertile land for cultivation.
        </p>
        <h3>3. The Great Indian Desert:</h3>
        <p>
          The Great Indian Desert lies in the western part of India. It is a dry, hot and sandy stretch of land. It has very little vegetation.
        </p>
        <h3>4. The Peninsular Plateau:</h3>
        <p>
          To the south of the Northern Plains lies the Peninsular Plateau. It is triangular in shape. The relief is highly uneven. This is a region with numerous hill ranges and valleys. The Aravalli hills, one of the oldest mountain ranges of the world, border it on the north-west side. The Vindhyas and the Satpuras are the important ranges. The rivers Narmada and Tapi flow through these ranges.
        </p>
        <h3>5. The Coastal Plains:</h3>
        <p>
          To the West of the Western Ghats and the East of Eastern Ghats lie the Coastal Plains. The Western Coastal Plains are very narrow. The Eastern Coastal Plains are much broader.
        </p>
        <h3>6. The Islands:</h3>
        <p>
          Two groups of islands also form part of India: the Lakshadweep Islands (in the Arabian Sea, coral islands) and the Andaman and Nicobar Islands (in the Bay of Bengal, volcanic origin).
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Visualize India's map and locate each physical division to remember them easily!</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>India is a vast country with diverse geographical features.</li>
          <li>It is located in the Northern Hemisphere, with the Tropic of Cancer passing through it.</li>
          <li>India's physical divisions include the Himalayas, Northern Plains, Great Indian Desert, Peninsular Plateau, Coastal Plains, and Islands.</li>
          <li>The Indian Standard Time (IST) is based on the 82°30'E longitude.</li>
        </ul>
      </div>
    </div>
  );
};

export default OurCountryIndiaNotes;
