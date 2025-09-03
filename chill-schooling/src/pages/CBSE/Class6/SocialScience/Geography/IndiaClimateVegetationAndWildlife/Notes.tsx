import React from 'react';
import './Notes.css';

const IndiaClimateVegetationAndWildlifeNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 8: India: Climate, Vegetation and Wildlife</h1>

      <section id="introduction">
        <h2>Climate of India</h2>
        <p>
          Climate is the average weather condition, which has been measured over many years. The climate of India has broadly been described as Monsoon type. Monsoon is derived from the Arabic word ‘mausim’ which literally means seasons. Due to India’s location in the tropical region, most of the rain is brought by monsoon winds.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The word 'monsoon' is derived from the Arabic word 'mausim', which means season.</p>
        </div>
      </section>

      <section id="seasons-in-india">
        <h2>Seasons in India</h2>
        <p>Broadly, four major seasons are recognised in India:</p>
        <h3>1. Cold Weather Season (Winter):</h3>
        <p>
          December to February. The sun rays do not fall directly in the region. As a result, the temperatures are quite low in northern India.
        </p>
        <h3>2. Hot Weather Season (Summer):</h3>
        <p>
          March to May. The sun rays more or less directly fall in this region. Temperature becomes very high. Hot and dry winds called loo blow during the day.
        </p>
        <h3>3. Southwest Monsoon Season (Rainy Season):</h3>
        <p>
          June to September. The onset and advance of monsoon. The winds blow from Arabian Sea and Bay of Bengal towards the land. They carry moisture with them. When these winds strike the mountain barriers, rainfall occurs.
        </p>
        <h3>4. Retreating Monsoon Season (Autumn):</h3>
        <p>
          October and November. The monsoon winds start retreating from the northern plains. The southern parts of India, particularly Tamil Nadu and Andhra Pradesh, receive rainfall in this season.
        </p>
      </section>

      <section id="natural-vegetation">
        <h2>Natural Vegetation</h2>
        <p>
          Natural vegetation refers to a plant community that has grown naturally without human aid and has been left undisturbed by humans for a long time. India has a wide range of natural vegetation.
        </p>
        <h3>Types of Natural Vegetation:</h3>
        <ul>
          <li><strong>Tropical Evergreen Forests:</strong> Found in areas that receive heavy rainfall. Very dense, trees shed their leaves at different times of the year. E.g., Andaman & Nicobar Islands, parts of North-Eastern states, and a narrow strip of the Western Ghats.</li>
          <li><strong>Tropical Deciduous Forests:</strong> Also called monsoon forests. Less dense, shed their leaves at a particular time of the year. Found in a large part of the country. E.g., Madhya Pradesh, Uttar Pradesh, Bihar, Jharkhand, Chhattisgarh, Odisha, and parts of Maharashtra.</li>
          <li><strong>Thorn Forests and Scrubs:</strong> Found in dry areas of the country. Leaves are in the form of spines to reduce loss of water. E.g., Rajasthan, Punjab, Haryana, Eastern slopes of Western Ghats, and Gujarat.</li>
          <li><strong>Mountain Vegetation:</strong> Found in mountainous areas. The type of vegetation changes with the change in height. E.g., Himalayas.</li>
          <li><strong>Mangrove Forests:</strong> Can survive in saline water. Found mainly in Sunderbans in West Bengal and Andaman & Nicobar Islands.</li>
        </ul>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Connect the type of vegetation to the climate and rainfall of the region!</p>
        </div>
      </section>

      <section id="wildlife">
        <h2>Wildlife</h2>
        <p>
          India is equally rich in wildlife. There are thousands of species of animals and a large variety of reptiles, amphibians, mammals, birds, insects and worms.
        </p>
        <ul>
          <li>Tigers are found in various parts of the country. Gir forest in Gujarat is the home of Asiatic lions.</li>
          <li>Elephants and one-horned rhinoceroses are found in Assam. Elephants are also found in Kerala and Karnataka.</li>
          <li>Camels and wild asses are found in the Great Indian Desert and the Rann of Kuchchh respectively.</li>
          <li>India has more than 1200 species of birds. The peacock is our national bird.</li>
          <li>There are several hundreds of species of snakes found in India. Cobras and Kraits are some of the important ones.</li>
        </ul>
        <p>
          To protect these, many national parks, wildlife sanctuaries and biosphere reserves have been set up. The government has also started Project Tiger and Project Elephant to protect these animals.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>India has a monsoon type of climate with four main seasons: cold, hot, southwest monsoon, and retreating monsoon.</li>
          <li>Natural vegetation varies across India, including tropical evergreen, deciduous, thorn, mountain, and mangrove forests.</li>
          <li>India is rich in wildlife, with diverse species protected in national parks, sanctuaries, and reserves.</li>
          <li>Project Tiger and Project Elephant are government initiatives to protect these animals.</li>
        </ul>
      </div>
    </div>
  );
};

export default IndiaClimateVegetationAndWildlifeNotes;
