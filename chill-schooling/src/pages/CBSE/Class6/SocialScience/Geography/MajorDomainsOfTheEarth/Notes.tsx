import React from 'react';
import './Notes.css';

const MajorDomainsOfTheEarthNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 5: Major Domains of the Earth</h1>

      <section id="introduction">
        <h2>The Earth: A Unique Planet</h2>
        <p>
          The Earth is the only planet where life is known to exist. Human beings can live here because the life-sustaining elements of land, water and air are present on the Earth.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word 'Lithosphere' comes from the Greek word 'Lithos' meaning stone. 'Atmosphere' from 'Atmos' meaning vapour. 'Hydrosphere' from 'Hydor' meaning water. 'Biosphere' from 'Bios' meaning life.</p>
        </div>
      </section>

      <section id="domains-of-the-earth">
        <h2>Major Domains of the Earth</h2>
        <p>The Earth's surface is a complex zone where three main components of the environment meet, overlap and interact:</p>
        <h3>1. Lithosphere:</h3>
        <p>
          The solid portion of the Earth on which we live is called the Lithosphere. It comprises the rocks of the Earth’s crust and the thin layers of soil that contain nutrient elements which sustain organisms.
        </p>
        <h3>2. Atmosphere:</h3>
        <p>
          The gaseous layer that surrounds the Earth is called the Atmosphere. The thin blanket of air that surrounds the Earth is called the atmosphere. The gravitational force of the Earth holds the atmosphere around it. It protects us from the harmful scorching rays of the sun. It consists of a number of gases like nitrogen, oxygen, carbon dioxide and other gases.
        </p>
        <h3>3. Hydrosphere:</h3>
        <p>
          Water covers a very large area of the Earth’s surface. This domain is called the Hydrosphere. It comprises various sources of water and different types of water bodies like rivers, lakes, seas, oceans, etc. It is essential for all living organisms.
        </p>
        <h3>4. Biosphere:</h3>
        <p>
          The Biosphere is the narrow zone of contact between the land, water and air. It is in this zone that life, that is unique to this planet, exists.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>Mountains, plateaus, plains, and valleys are all part of the lithosphere. Clouds, winds, and rain are part of the atmosphere. Oceans, rivers, and lakes are part of the hydrosphere. All living things, from tiny bacteria to giant whales, are part of the biosphere.</p>
        </div>
      </section>

      <section id="lithosphere-details">
        <h2>Lithosphere in Detail</h2>
        <p>
          The lithosphere is divided into continents and ocean basins.
        </p>
        <h3>Continents:</h3>
        <p>
          There are seven major continents. These are Asia, Europe, Africa, North America, South America, Australia and Antarctica.
        </p>
        <ul>
          <li><strong>Asia:</strong> Largest continent, covers about one-third of the total land area of the Earth. Lies in the Eastern Hemisphere. The Tropic of Cancer passes through this continent. Asia is separated from Europe by the Ural mountains. The combined landmass of Europe and Asia is called Eurasia.</li>
          <li><strong>Europe:</strong> Much smaller than Asia. The continent lies to the west of Asia. The Arctic Circle passes through it. It is bound by water bodies on three sides.</li>
          <li><strong>Africa:</strong> Second largest continent. The Equator, the Tropic of Cancer and the Tropic of Capricorn pass through it. The Sahara Desert, the world’s largest hot desert, is located in Africa. The Nile, the world’s longest river, also flows through Africa.</li>
          <li><strong>North America:</strong> Third largest continent. It is linked to South America by a very narrow isthmus called the Isthmus of Panama. The continent lies completely in the Northern and Western Hemispheres.</li>
          <li><strong>South America:</strong> Lies mostly in the Southern Hemisphere. The Andes, world’s longest mountain range, runs through its length. The Amazon, the world’s largest river, flows through this continent.</li>
          <li><strong>Australia:</strong> Smallest continent that lies entirely in the Southern Hemisphere. It is called an island continent.</li>
          <li><strong>Antarctica:</strong> A huge continent that lies completely in the Southern Hemisphere. It is permanently covered with thick ice sheets and there are no permanent human settlements. Many countries have research stations here.</li>
        </ul>
      </section>

      <section id="hydrosphere-details">
        <h2>Hydrosphere in Detail</h2>
        <p>
          More than 71% of the Earth is covered with water and 29% is with land. Hydrosphere consists of water in all its forms, that is, ice, water and water vapour.
        </p>
        <h3>Oceans:</h3>
        <p>
          The major part of the hydrosphere is covered by oceans. The oceans are interconnected. The ocean waters are always moving. The three chief movements of ocean waters are the waves, the tides and the ocean currents.
        </p>
        <p>There are five major oceans: the Pacific Ocean, the Atlantic Ocean, the Indian Ocean, the Southern Ocean and the Arctic Ocean.</p>
        <ul>
          <li><strong>Pacific Ocean:</strong> Largest ocean. It is circular in shape. Mariana Trench, the deepest part of the Earth, lies in the Pacific Ocean.</li>
          <li><strong>Atlantic Ocean:</strong> Second largest ocean. It is ‘S’ shaped. The coastline is highly indented, which is ideal for natural harbours and ports.</li>
          <li><strong>Indian Ocean:</strong> The only ocean named after a country, India. It is triangular in shape.</li>
          <li><strong>Southern Ocean:</strong> Encircles the continent of Antarctica and extends northward to 60° South latitude.</li>
          <li><strong>Arctic Ocean:</strong> Located within the Arctic Circle and surrounds the North Pole. It is connected with the Pacific Ocean by a narrow stretch of shallow water known as Bering Strait.</li>
        </ul>
      </section>

      <section id="atmosphere-details">
        <h2>Atmosphere in Detail</h2>
        <p>
          The atmosphere is composed mainly of nitrogen (78%), oxygen (21%) and other gases like carbon dioxide, argon, etc. (1%) by volume. Oxygen is the breath of life while nitrogen helps in the growth of living organisms. Carbon dioxide, though present in minute amount, is important as it absorbs heat radiated by the Earth, thereby keeping the planet warm. It is also essential for the growth of plants.
        </p>
        <p>
          The atmosphere is divided into five layers based on composition, temperature and other properties. These layers starting from Earth’s surface are the Troposphere, the Stratosphere, the Mesosphere, the Thermosphere and the Exosphere.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>The Earth has three major domains: Lithosphere (land), Hydrosphere (water), and Atmosphere (air).</li>
          <li>The Biosphere is the narrow zone where these three domains interact and life exists.</li>
          <li>There are seven continents: Asia, Europe, Africa, North America, South America, Australia, and Antarctica.</li>
          <li>There are five major oceans: Pacific, Atlantic, Indian, Southern, and Arctic.</li>
          <li>The atmosphere is a mixture of gases, primarily nitrogen and oxygen, and is divided into five layers.</li>
        </ul>
      </div>
    </div>
  );
};

export default MajorDomainsOfTheEarthNotes;
