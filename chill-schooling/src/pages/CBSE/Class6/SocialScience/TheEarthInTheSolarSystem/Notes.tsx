import React from 'react';
import './Notes.css';

const TheEarthInTheSolarSystemNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 1: The Earth in the Solar System</h1>

      <section id="introduction">
        <h2>The Universe and Galaxies</h2>
        <p>
          The universe is vast and contains everything that exists, including all matter, energy, planets, stars, galaxies, and the space in between them. Galaxies are huge systems of billions of stars, and clouds of dust and gases. Our solar system is a part of the Milky Way galaxy.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>It is difficult to imagine how big the universe is. Scientists are still trying to find out more and more about it!</p>
        </div>
      </section>

      <section id="celestial-bodies">
        <h2>Celestial Bodies</h2>
        <p>
          Celestial bodies are objects that exist in space. These include stars, planets, satellites, asteroids, and meteoroids.
        </p>
        <h3>Stars:</h3>
        <p>
          Stars are celestial bodies that are hot and made up of gases. They have their own heat and light, which they emit in large amounts. The Sun is a star.
        </p>
        <h3>Planets:</h3>
        <p>
          Planets are celestial bodies that do not have their own heat and light. They are lit by the light of the stars. The Earth is a planet. There are eight planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.
        </p>
        <h3>Satellites:</h3>
        <p>
          A satellite is a celestial body that moves around the planets in the same way as the planets move around the Sun. The Moon is a natural satellite of the Earth.
        </p>
      </section>

      <section id="the-solar-system">
        <h2>The Solar System</h2>
        <p>
          The Solar System consists of the Sun, eight planets, satellites, and some other celestial bodies known as asteroids and meteoroids.
        </p>
        <h3>The Sun:</h3>
        <p>
          The Sun is in the centre of the solar system. It is huge and made up of extremely hot gases. It provides the pulling force that binds the solar system. The Sun is the ultimate source of heat and light for the solar system.
        </p>
        <h3>The Planets:</h3>
        <p>
          All the eight planets of the solar system move around the Sun in fixed elliptical paths. These paths are called orbits.
        </p>
        <table>
          <thead>
            <tr>
              <th>Planet</th>
              <th>Key Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mercury</strong></td>
              <td>Nearest to the Sun, smallest planet.</td>
            </tr>
            <tr>
              <td><strong>Venus</strong></td>
              <td>Earth's twin, brightest planet.</td>
            </tr>
            <tr>
              <td><strong>Earth</strong></td>
              <td>The blue planet, only planet with life.</td>
            </tr>
            <tr>
              <td><strong>Mars</strong></td>
              <td>The red planet.</td>
            </tr>
            <tr>
              <td><strong>Jupiter</strong></td>
              <td>Largest planet.</td>
            </tr>
            <tr>
              <td><strong>Saturn</strong></td>
              <td>Has beautiful rings.</td>
            </tr>
            <tr>
              <td><strong>Uranus</strong></td>
              <td>Rotates clockwise.</td>
            </tr>
            <tr>
              <td><strong>Neptune</strong></td>
              <td>Farthest from the Sun.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>The universe contains everything that exists, including galaxies, stars, and planets.</li>
          <li>Celestial bodies include stars (like the Sun), planets (like Earth), and satellites (like the Moon).</li>
          <li>The Solar System comprises the Sun, eight planets, satellites, asteroids, and meteoroids.</li>
          <li>The Sun is the center of the solar system and its ultimate source of heat and light.</li>
          <li>Planets revolve around the Sun in fixed orbits.</li>
        </ul>
      </div>
    </div>
  );
};

export default TheEarthInTheSolarSystemNotes;
