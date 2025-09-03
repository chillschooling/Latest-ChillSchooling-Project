import React from 'react';
import './Notes.css';

const GlobeLatitudesAndLongitudesNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 2: Globe: Latitudes and Longitudes</h1>

      <section id="introduction">
        <h2>The Globe</h2>
        <p>
          A globe is a true model (miniature form) of the Earth. It shows the Earth's shape, continents, oceans, and countries in their correct relative sizes and positions. Globes can be of varying size and type – big ones, small pocket globes, and globe-like balloons. The globe is not fixed; it can be rotated the same way as a potter’s wheel or a top spins.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>On the globe, countries, continents and oceans are shown in their correct size. It is difficult to describe the location of a point on a sphere like the Earth. Now the question arises as to how to locate a place on it?</p>
        </div>
      </section>

      <section id="axis-and-poles">
        <h2>Axis and Poles</h2>
        <p>
          You will notice that a needle is fixed through the globe in a tilted manner, which is called its axis. Two points on the globe through which the needle passes are two poles – North Pole and South Pole. The globe can be moved around this needle from west to east just as the Earth moves.
        </p>
        <p>
          However, remember that the Earth has no such needle. It rotates on its axis, which is an imaginary line.
        </p>
      </section>

      <section id="equator-and-parallels-of-latitudes">
        <h2>Equator and Parallels of Latitudes</h2>
        <p>
          Another imaginary line running on the globe divides it into two equal parts. This line is known as the Equator. The northern half of the Earth is known as the Northern Hemisphere and the southern half is known as the Southern Hemisphere. They are both equal halves. Therefore, the Equator is an imaginary circular line and is a very important reference point to locate places on the Earth.
        </p>
        <p>
          All parallel circles from the Equator up to the poles are called parallels of latitudes. Latitudes are measured in degrees.
        </p>
        <table>
          <thead>
            <tr>
              <th>Important Parallels of Latitudes</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Equator</strong></td>
              <td>0° latitude</td>
            </tr>
            <tr>
              <td><strong>Tropic of Cancer</strong></td>
              <td>23½° N in the Northern Hemisphere</td>
            </tr>
            <tr>
              <td><strong>Tropic of Capricorn</strong></td>
              <td>23½° S in the Southern Hemisphere</td>
            </tr>
            <tr>
              <td><strong>Arctic Circle</strong></td>
              <td>66½° N of the Equator</td>
            </tr>
            <tr>
              <td><strong>Antarctic Circle</strong></td>
              <td>66½° S of the Equator</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="heat-zones">
        <h2>Heat Zones of the Earth</h2>
        <p>
          The mid-day sun is exactly overhead at least once a year on all latitudes in between the Tropic of Cancer and the Tropic of Capricorn. This area, therefore, receives the maximum heat and is called the Torrid Zone.
        </p>
        <p>
          The mid-day sun never shines overhead on any latitude beyond the Tropic of Cancer and the Tropic of Capricorn. The angle of the sun’s rays goes on decreasing towards the poles. As such, the areas bounded by the Tropic of Cancer and the Arctic Circle in the Northern Hemisphere, and the Tropic of Capricorn and the Antarctic Circle in the Southern Hemisphere, have moderate temperatures. These are, therefore, called Temperate Zones.
        </p>
        <p>
          Areas lying between the Arctic Circle and the North Pole in the Northern Hemisphere and the Antarctic Circle and the South Pole in the Southern Hemisphere, are very cold. It is because here the sun rays are always slanting and provide less heat. These are, therefore, called Frigid Zones.
        </p>
      </section>

      <section id="longitudes">
        <h2>What are Longitudes?</h2>
        <p>
          To locate any place, we need to know more than just its latitude. For example, Tonga Islands (in the Pacific Ocean) and Mauritius Islands (in the Indian Ocean) are situated on the same latitude (20° S). Now, to locate them precisely, we must find out how far east or west these places are from a given line of reference running from the North Pole to the South Pole. These lines of references are called the meridians of longitude.
        </p>
        <p>
          The distance between them are measured in ‘degrees of longitude’. Each degree is further divided into minutes, and minutes into seconds. They are semi-circles and the distance between them decreases steadily polewards until it becomes zero at the poles, where all the meridians meet.
        </p>
        <p>
          Unlike parallels of latitude, all meridians are of equal length. It was, therefore, difficult to number the meridians. Hence, all countries decided that the count should begin from the Meridian passing through Greenwich, where the British Royal Observatory is located. This Meridian is called the Prime Meridian. Its value is 0° longitude and from it we count 180° Eastward as well as 180° Westward.
        </p>
      </section>

      <section id="longitude-and-time">
        <h2>Longitude and Time</h2>
        <p>
          The best means of measuring time is by the movement of the Earth, the Moon and the planets. The local time can be reckoned by the shadow cast by the Sun, which is the shortest at noon and longest at sunrise and sunset.
        </p>
        <p>
          As the Earth rotates from west to east, those places east of Greenwich will be ahead of Greenwich time and those to the west will be behind it. The rate of difference can be calculated as: The Earth rotates 360° in 24 hours, which means 15° an hour or 1° in 4 minutes.
        </p>
        <p>
          Thus, when it is 12 noon at Greenwich, the time at 15° East of Greenwich will be 15 × 4 = 60 minutes, i.e., 1 hour ahead of Greenwich time. Which means 1 p.m. But at 15° West of Greenwich, the time will be behind Greenwich time by 1 hour, i.e., it will be 11.00 a.m.
        </p>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>A globe is a miniature model of the Earth, showing its true shape and features.</li>
          <li>The Earth rotates on an imaginary axis, passing through the North and South Poles.</li>
          <li>The Equator is an imaginary line dividing the Earth into Northern and Southern Hemispheres.</li>
          <li>Parallels of latitudes are imaginary circles parallel to the Equator, measured in degrees.</li>
          <li>Important latitudes include the Equator (0°), Tropic of Cancer (23½° N), Tropic of Capricorn (23½° S), Arctic Circle (66½° N), and Antarctic Circle (66½° S).</li>
          <li>The Earth has three heat zones: Torrid Zone (maximum heat), Temperate Zones (moderate temperature), and Frigid Zones (very cold).</li>
          <li>Longitudes are imaginary lines (meridians) running from the North Pole to the South Pole, used to determine east-west location and time.</li>
          <li>The Prime Meridian (0° longitude) passes through Greenwich.</li>
          <li>Time difference is calculated based on longitude: 1° longitude = 4 minutes.</li>
        </ul>
      </div>
    </div>
  );
};

export default GlobeLatitudesAndLongitudesNotes;
