import React from 'react';
import './Notes.css';

const TarosRewardNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter: Taro's Reward</h1>

      <section id="summary">
        <h2>Summary</h2>
        <p>
          "Taro's Reward" is a Japanese folktale about a young, poor, and hardworking woodcutter named Taro who lives with his elderly parents. He is very thoughtful and dutiful, always prioritizing his parents' well-being.
        </p>
        <p>
          One day, his father expresses a wish for sake, a Japanese drink. Taro, wanting to fulfill his father's wish, works harder than ever. He discovers a magical waterfall that provides sake only to him, while others find only plain water.
        </p>
        <p>
          The villagers, hearing about the magic waterfall, rush to it but are disappointed to find only cold water. They become angry with Taro. However, the Emperor of Japan, hearing of Taro's filial piety and hard work, rewards him with gold and honors him, encouraging all children to honor their parents.
        </p>
      </section>

      <section id="characters">
        <h2>Characters</h2>
        <ul>
          <li>
            <strong>Taro:</strong> The protagonist, a hardworking, thoughtful, and dutiful woodcutter who prioritizes his parents.
          </li>
          <li>
            <strong>Taro's Father:</strong> An old man whose wish for sake drives the plot.
          </li>
          <li>
            <strong>Taro's Mother:</strong> Represents the family Taro cares for.
          </li>
          <li>
            <strong>The Emperor of Japan:</strong> The benevolent ruler who rewards Taro.
          </li>
          <li>
            <strong>Villagers:</strong> Initially curious, then angry when they don't find sake.
          </li>
          <li>
            <strong>The Magic Waterfall:</strong> A supernatural element that provides sake to Taro and plain water to others.
          </li>
        </ul>
      </section>

      <section id="themes-moral">
        <h2>Themes and Moral</h2>
        <p>
          The central theme is <strong>Filial Piety and Respect for Parents</strong>, highlighting Taro's deep love and respect for his parents.
        </p>
        <p>
          It emphasizes <strong>Hard Work and Diligence</strong> as virtues that lead to reward.
        </p>
        <p>
          The story also conveys the theme of <strong>Reward for Virtue</strong>, showing that goodness and selflessness are ultimately rewarded.
        </p>
        <p>
          Finally, it contrasts <strong>Greed vs. Selflessness</strong>, as the villagers' greedy pursuit of sake results in disappointment, unlike Taro's selfless intentions.
        </p>
      </section>
    </div>
  );
};

export default TarosRewardNotes;