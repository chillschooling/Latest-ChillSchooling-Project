import React from 'react';
import './Notes.css';

const ADifferentKindOfSchoolNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter: A Different Kind Of School</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          "A Different Kind of School" by E.V. Lucas tells the story of a unique educational institution run by Miss Beam. The school's primary goal is to teach empathy and social responsibility rather than just academic subjects.
        </p>
        <p>
          The narrator visits the school and observes its unconventional methods. Each term, students experience "misfortune days" where they live through a blind day, lame day, deaf day, dumb day, or injured day. During these days, other students help them, fostering understanding and compassion.
        </p>
        <p>
          The narrator witnesses a girl on her blind day and realizes the difficulties faced by people with disabilities. This experience deeply moves him, and he understands the value of Miss Beam's method in developing thoughtful and considerate individuals. The story emphasizes that true education goes beyond textbooks and includes moral values and character development.
        </p>
      </section>

      <section id="characters">
        <h2>Characters</h2>
        <ul>
          <li>
            <strong>The Narrator:</strong> A curious visitor who is initially skeptical but becomes deeply impressed and transformed by Miss Beam's teaching methods.
          </li>
          <li>
            <strong>Miss Beam:</strong> The kind, authoritative, and understanding headmistress who believes in developing thoughtfulness and kindness in her students through experiential learning.
          </li>
          <li>
            <strong>A Young Girl:</strong> A student experiencing her "blind day," who helps the narrator understand the challenges of living with a disability.
          </li>
          <li>
            <strong>A Little Boy:</strong> A younger student who guides the girl with bandaged eyes.
          </li>
        </ul>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The central theme is <strong>Empathy and Thoughtfulness</strong>. The school's method of making children experience disabilities firsthand aims to cultivate understanding and compassion.
        </p>
        <p>
          Another key theme is <strong>Responsibility and Good Citizenship</strong>. The school trains students to be considerate, helpful, and responsible members of society.
        </p>
        <p>
          The story also highlights <strong>Experiential Learning</strong>, showing that learning by doing is effective in fostering deeper understanding.
        </p>
        <p>
          Finally, it emphasizes that true education goes <strong>Beyond Academic Knowledge</strong>, focusing on moral values, character development, and social awareness.
        </p>
      </section>
    </div>
  );
};

export default ADifferentKindOfSchoolNotes;