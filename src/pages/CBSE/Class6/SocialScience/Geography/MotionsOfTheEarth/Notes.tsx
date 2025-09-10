import React from 'react';
import './Notes.css';

const MotionsOfTheEarthNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 3: Motions of the Earth</h1>

      <section id="introduction">
        <h2>Rotation and Revolution</h2>
        <p>
          The Earth has two primary motions: rotation and revolution. Rotation is the movement of the Earth on its axis. Revolution is the movement of the Earth around the Sun in a fixed path or orbit.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>The axis of the Earth is an imaginary line, which makes an angle of 66½° with its orbital plane.</p>
        </div>
      </section>

      <section id="rotation">
        <h2>Rotation: Day and Night</h2>
        <p>
          The Earth rotates on its axis from west to east. It takes about 24 hours to complete one rotation. The period of rotation is known as the Earth day. This is the daily motion of the Earth.
        </p>
        <p>
          The circle that divides the day from night on the globe is called the circle of illumination. The Earth receives light from the Sun. Only half of the Earth gets light from the Sun at a time. The other half remains in darkness.
        </p>
        <div className="example-box">
          <h4>Example:</h4>
          <p>If the Earth did not rotate, the portion of the Earth facing the Sun would always experience day, thus bringing continuous warmth to the region. The other half would remain in darkness and experience continuous cold. Such extreme conditions would not be possible for life to exist.</p>
        </div>
      </section>

      <section id="revolution">
        <h2>Revolution: Seasons</h2>
        <p>
          The second motion of the Earth around the Sun in its orbit is called revolution. It takes 365¼ days (one year) to revolve around the Sun. We consider a year as consisting of 365 days only and ignore six hours for the sake of convenience.
        </p>
        <p>
          The six hours saved every year are added to make one day (24 hours) over a period of four years. This surplus day is added to the month of February. Thus every fourth year, February is of 29 days instead of 28 days. Such a year with 366 days is called a leap year.
        </p>
        <p>
          The Earth is going around the Sun in an elliptical orbit.
        </p>
        <div className="memory-trick">
          <h4>Memory Trick!</h4>
          <p>Remember that revolution causes seasons, and rotation causes day and night!</p>
        </div>
      </section>

      <section id="seasons">
        <h2>Changes in Seasons</h2>
        <p>
          Due to the Earth's revolution and the tilt of its axis, different parts of the Earth receive varying amounts of sunlight throughout the year, leading to changes in seasons.
        </p>
        <ul>
          <li>
            <strong>Summer Solstice:</strong> On 21st June, the Northern Hemisphere is tilted towards the Sun. The rays of the Sun fall directly on the Tropic of Cancer. As a result, these areas receive more heat. The areas near the poles receive less heat as the rays of the Sun are slanting. The North Pole is inclined towards the Sun and the places beyond the Arctic Circle experience continuous daylight for about six months. Since a large portion of the Northern Hemisphere is getting light from the Sun, it is summer in the regions north of the Equator. The longest day and the shortest night at these places occur on 21st June. At this time in the Southern Hemisphere, all these conditions are reversed. It is winter season there. The nights are longer than the days. This position of the Earth is called the Summer Solstice.
          </li>
          <li>
            <strong>Winter Solstice:</strong> On 22nd December, the Tropic of Capricorn receives direct rays of the Sun as the South Pole tilts towards it. As the Sun’s rays fall vertically at the Tropic of Capricorn (23½° S), a larger portion of the Southern Hemisphere gets light. Therefore, it is summer in the Southern Hemisphere with longer days and shorter nights. The reverse happens in the Northern Hemisphere. This position of the Earth is called the Winter Solstice.
          </li>
          <li>
            <strong>Equinox:</strong> On 21st March and September 23rd, direct rays of the Sun fall on the Equator. At this position, neither of the poles is tilted towards the Sun; so, the whole Earth experiences equal days and equal nights. This is called an equinox.
          </li>
          <li>
            On 23rd September, it is autumn season in the Northern Hemisphere and spring season in the Southern Hemisphere. The opposite is the case on 21st March, when it is spring in the Northern Hemisphere and autumn in the Southern Hemisphere.
          </li>
        </ul>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>The Earth has two motions: rotation (on its axis, causing day and night) and revolution (around the Sun, causing seasons).</li>
          <li>One rotation takes 24 hours (Earth day).</li>
          <li>One revolution takes 365¼ days (one year). Every fourth year is a leap year (366 days).</li>
          <li>The tilt of the Earth's axis and its revolution cause seasons.</li>
          <li>Summer Solstice (June 21st): Longest day in Northern Hemisphere, shortest in Southern.</li>
          <li>Winter Solstice (December 22nd): Longest day in Southern Hemisphere, shortest in Northern.</li>
          <li>Equinox (March 21st and September 23rd): Equal day and night all over the Earth.</li>
        </ul>
      </div>
    </div>
  );
};

export default MotionsOfTheEarthNotes;
