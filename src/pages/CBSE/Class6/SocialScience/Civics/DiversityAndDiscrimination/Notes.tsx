import React from 'react';
import './Notes.css';

const DiversityAndDiscriminationNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 2: Diversity and Discrimination</h1>

      <section id="introduction">
        <h2>Prejudice and Stereotypes</h2>
        <p>
          Diversity is about recognizing and respecting differences. However, sometimes these differences can lead to prejudice and discrimination. Prejudice means to judge other people negatively or see them as inferior. Stereotypes are fixed ideas about a particular type of person or thing.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Prejudice can be based on many things: people's religious beliefs, the colour of their skin, the region they come from, the accent they speak in, or the clothes they wear.</p>
        </div>
      </section>

      <section id="discrimination">
        <h2>Discrimination</h2>
        <p>
          Discrimination happens when people act on their prejudices or stereotypes. If you do something to put other people down, or stop them from taking part in certain activities, or taking up certain jobs, or stop them from living in certain neighbourhoods, it is called discrimination.
        </p>
        <h3>Types of Discrimination:</h3>
        <ul>
          <li><strong>Based on Caste:</strong> The caste system is an old system of social hierarchy in India, where people were divided into groups based on their birth and occupation. This led to severe discrimination against certain groups, especially Dalits (formerly known as untouchables).</li>
          <li><strong>Based on Religion:</strong> Discrimination based on religious beliefs.</li>
          <li><strong>Based on Gender:</strong> Discrimination against individuals based on their gender, often leading to unequal opportunities for women.</li>
          <li><strong>Based on Economic Background:</strong> Discrimination against people who are poor or belong to lower economic strata.</li>
        </ul>
        <div className="example-box">
          <h4>Example:</h4>
          <p>If a person is denied a job simply because of their caste, even if they are qualified, it is an act of discrimination.</p>
        </div>
      </section>

      <section id="inequality-and-diversity">
        <h2>Inequality and Diversity</h2>
        <p>
          Diversity is about differences that add richness to our lives. Inequality, on the other hand, is about differences that arise because of unequal access to resources and opportunities.
        </p>
        <p>
          For example, being from a different religion is a form of diversity. Being poor is a form of inequality.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Diversity = Variety; Inequality = Unfairness!</p>
        </div>
      </section>

      <section id="struggle-for-equality">
        <h2>Struggle for Equality</h2>
        <p>
          Throughout history, many individuals and groups have struggled against discrimination and for equality.
        </p>
        <ul>
          <li><strong>Dr. B.R. Ambedkar:</strong> He is considered the father of the Indian Constitution and a leader of the Dalits. He fought tirelessly for the rights of Dalits and against the caste system.</li>
          <li><strong>Mahatma Gandhi:</strong> He also fought against untouchability and worked for social equality.</li>
        </ul>
        <p>
          The Indian Constitution guarantees equality to all citizens, regardless of their caste, religion, gender, or place of birth. It also makes untouchability a punishable offence.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Prejudice is judging others negatively, and stereotypes are fixed ideas about people.</li>
          <li>Discrimination is acting on prejudices, leading to unfair treatment.</li>
          <li>Discrimination can be based on caste, religion, gender, or economic background.</li>
          <li>Diversity is about differences that enrich life, while inequality is about unequal access to resources.</li>
          <li>Many leaders like Dr. B.R. Ambedkar and Mahatma Gandhi fought for equality.</li>
          <li>The Indian Constitution guarantees equality and prohibits discrimination.</li>
        </ul>
      </div>
    </div>
  );
};

export default DiversityAndDiscriminationNotes;
