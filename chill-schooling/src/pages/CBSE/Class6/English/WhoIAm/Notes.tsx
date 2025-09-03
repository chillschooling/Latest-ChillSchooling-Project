import React from 'react';
import './Notes.css';

const WhoIAmNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter: Who I Am</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          The chapter "Who I Am" introduces six different children, each with unique aspirations, likes, and dislikes, highlighting the theme of individuality and self-discovery.
        </p>
        <p>
          We meet Radha, an adventurous girl who loves climbing trees; Nasir, who wants to become a seed collector; Rohit, a dreamer who wishes to travel the world; Serbjit, who struggles with anger when people don't believe him; Dolma, who is ambitious and wants to become the Prime Minister; and Peter, whose favorite day is Sunday because his family goes to the cinema.
        </p>
        <p>
          Each child's story showcases their distinct personality and dreams, emphasizing that every person is unique and these differences should be celebrated and accepted. The chapter encourages students to explore their own qualities and experiences that shape who they are.
        </p>
      </section>

      <section id="characters">
        <h2>Characters</h2>
        <ul>
          <li>
            <strong>Radha:</strong> An adventurous and outgoing girl who loves climbing trees.
          </li>
          <li>
            <strong>Nasir:</strong> Wants to become a seed collector to help his father with cotton fields.
          </li>
          <li>
            <strong>Rohit:</strong> A dreamer who wishes to travel the world and values nature.
          </li>
          <li>
            <strong>Serbjit:</strong> Struggles with anger when people don't believe him.
          </li>
          <li>
            <strong>Dolma:</strong> Ambitious and wants to become the Prime Minister of India.
          </li>
          <li>
            <strong>Peter:</strong> Enjoys family outings to the cinema and feels lucky to have a happy family.
          </li>
        </ul>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The central theme is <strong>Accepting Differences and Individuality</strong>, emphasizing that every person is unique and their differences should be celebrated.
        </p>
        <p>
          It encourages <strong>Self-Identity and Self-Discovery</strong>, prompting students to explore what shapes who they are.
        </p>
        <p>
          The chapter showcases <strong>Diversity</strong> in characteristics, dreams, and experiences.
        </p>
        <p>
          It promotes <strong>Equality</strong>, challenging gender stereotypes by showing common dreams for both boys and girls.
        </p>
        <p>
          It highlights <strong>Determination and Faith</strong>, encouraging aiming high despite challenges.
        </p>
        <p>
          Finally, Peter's story emphasizes <strong>Love and Bond for Family</strong> and the importance of shared experiences.
        </p>
      </section>
    </div>
  );
};

export default WhoIAmNotes;