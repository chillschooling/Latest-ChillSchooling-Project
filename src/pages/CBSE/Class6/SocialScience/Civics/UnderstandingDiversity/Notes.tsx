import React from 'react';
import './Notes.css';

const UnderstandingDiversityNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 1: Understanding Diversity</h1>

      <section id="introduction">
        <h2>What is Diversity?</h2>
        <p>
          Diversity means understanding that each individual is unique, and recognizing our individual differences. These can be along the dimensions of race, ethnicity, gender, sexual orientation, socio-economic status, age, physical abilities, religious beliefs, political beliefs, or other ideologies.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>India is a country of many diversities. We speak different languages, have various types of food, celebrate different festivals, practice different religions, and yet live together.</p>
        </div>
      </section>

      <section id="diversity-in-india">
        <h2>Diversity in India</h2>
        <p>
          India is a land of diverse cultures, languages, religions, and geographical features.
        </p>
        <h3>1. Language Diversity:</h3>
        <p>
          India has more than 1600 languages spoken by people. However, there are 22 officially recognized languages.
        </p>
        <h3>2. Religious Diversity:</h3>
        <p>
          Major religions practiced in India include Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism.
        </p>
        <h3>3. Geographical Diversity:</h3>
        <p>
          From the Himalayas in the north to the coastal plains in the south, and deserts in the west to fertile plains in the east, India has a varied landscape. This diversity influences food, clothing, and lifestyle.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>People in Ladakh (cold desert) wear warm clothes and eat food that provides warmth, while people in Kerala (coastal region) wear lighter clothes and eat rice and fish.</p>
        </div>
      </section>

      <section id="diversity-and-interdependence">
        <h2>Diversity and Interdependence</h2>
        <p>
          Diversity is not just about differences; it also leads to interdependence. People with different skills and backgrounds contribute to society in various ways.
        </p>
        <p>
          For example, a farmer grows food, a tailor stitches clothes, and a teacher educates children. All these different professions are necessary for a society to function.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Diversity = Different + Together! We are different, but we live and work together.</p>
        </div>
      </section>

      <section id="unity-in-diversity">
        <h2>Unity in Diversity</h2>
        <p>
          Despite all the differences, India has a strong sense of unity. This "unity in diversity" has been a source of strength for the nation.
        </p>
        <p>
          The Indian national anthem, composed by Rabindranath Tagore, is a powerful expression of this unity. It speaks of the unity of India's diverse regions, cultures, and people.
        </p>
        <p>
          The freedom struggle against the British brought people from all backgrounds together. They fought unitedly to free India from British rule.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Diversity means recognizing and respecting individual differences in various aspects like language, religion, and geography.</li>
          <li>India is a highly diverse country with a multitude of languages, religions, and geographical features.</li>
          <li>Diversity leads to interdependence, where people with different skills contribute to society.</li>
          <li>"Unity in diversity" is a key characteristic of India, where people from various backgrounds live and work together.</li>
          <li>The Indian freedom struggle is an example of unity in diversity.</li>
        </ul>
      </div>
    </div>
  );
};

export default UnderstandingDiversityNotes;
