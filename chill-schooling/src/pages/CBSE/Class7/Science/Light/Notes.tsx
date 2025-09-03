import React from 'react';
import './Notes.css';

const LightNotes: React.FC = () => {
  return (
    <div className="notes-container">
      <h1>Chapter 11: Light</h1>

      <section id="what-is-light">
        <h2>What is Light?</h2>
        <p>
          Light is a fascinating form of energy that allows us to see the world around us. It stimulates the sense of sight, making objects visible to us.
        </p>
        <div className="did-you-know">
          <h4>Did You Know?</h4>
          <p>Natural sources of light include the Sun and fire, while man-made sources include electric bulbs and tube lights.</p>
        </div>
      </section>

      <section id="rectilinear-propagation">
        <h2>Rectilinear Propagation of Light</h2>
        <p>
          Light travels in straight lines. This property is called the <strong>rectilinear propagation of light</strong>.
        </p>
        <div className="example-box">
          <h4>Experiment:</h4>
          <p>You can observe this by trying to see a candle flame through a straight pipe versus a bent pipe; you can only see it through the straight pipe.</p>
        </div>
      </section>

      <section id="reflection-of-light">
        <h2>Reflection of Light</h2>
        <p>
          <strong>Reflection</strong> is the phenomenon of light bouncing back after striking a surface. We see objects when light reflected from them reaches our eyes.
        </p>
        <h4>Laws of Reflection:</h4>
        <ol>
          <li>The incident ray, the reflected ray, and the normal all lie in the same plane.</li>
          <li>The angle of incidence is always equal to the angle of reflection.</li>
        </ol>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Type of Reflection</th>
                <th>Description</th>
                <th>Surface</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Regular/Specular</strong></td>
                <td>Reflected rays are parallel, forming clear images.</td>
                <td>Smooth and polished (e.g., mirror)</td>
              </tr>
              <tr>
                <td><strong>Diffused/Irregular</strong></td>
                <td>Reflected rays scatter in different directions, no clear image.</td>
                <td>Rough or uneven (e.g., wall)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="mirrors">
        <h2>Mirrors</h2>
        <p>
          Mirrors are surfaces that reflect light. They can be plane or spherical.
        </p>
        <h4>Plane Mirrors:</h4>
        <ul>
          <li>Flat reflecting surface.</li>
          <li>Image is virtual, erect, same size as object, same distance behind mirror, and shows lateral inversion.</li>
        </ul>
        <h4>Spherical Mirrors:</h4>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Reflecting Surface</th>
                <th>Effect on Light</th>
                <th>Image Formed</th>
                <th>Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Concave Mirror</strong></td>
                <td>Curved inwards (like inside of spoon)</td>
                <td>Converges light</td>
                <td>Real/Virtual, Inverted/Erect, Smaller/Same/Larger</td>
                <td>Dentists, Torches, Headlights</td>
              </tr>
              <tr>
                <td><strong>Convex Mirror</strong></td>
                <td>Curved outwards (like back of spoon)</td>
                <td>Diverges light</td>
                <td>Always Virtual, Erect, Diminished</td>
                <td>Rear-view mirrors in vehicles (wider field of view)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="memory-trick">
          <h4>Real vs. Virtual Images:</h4>
          <p><strong>Real Image:</strong> Can be obtained on a screen (formed when light rays actually meet). <strong>Virtual Image:</strong> Cannot be obtained on a screen (formed when light rays appear to diverge).</p>
        </div>
      </section>

      <section id="refraction-of-light">
        <h2>Refraction of Light</h2>
        <p>
          <strong>Refraction</strong> is the bending of light when it passes from one transparent medium to another (e.g., from air to water or glass). This happens because the speed of light changes.
        </p>
      </section>

      <section id="lenses">
        <h2>Lenses</h2>
        <p>
          Lenses are transparent materials that refract light.
        </p>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Shape</th>
                <th>Effect on Light</th>
                <th>Image Formed</th>
                <th>Uses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Convex Lens</strong></td>
                <td>Thicker in the middle, thinner at edges</td>
                <td>Converges light</td>
                <td>Real/Virtual, Inverted/Erect, Smaller/Same/Larger</td>
                <td>Magnifying glasses</td>
              </tr>
              <tr>
                <td><strong>Concave Lens</strong></td>
                <td>Thinner in the middle, thicker at edges</td>
                <td>Diverges light</td>
                <td>Always Virtual, Erect, Diminished</td>
                <td>Spectacles, Cameras, Binoculars</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="dispersion-of-light">
        <h2>Dispersion of Light</h2>
        <p>
          White light, such as sunlight, is actually made up of seven different colours (VIBGYOR - Violet, Indigo, Blue, Green, Yellow, Orange, Red).
        </p>
        <div className="example-box">
          <h4>Dispersion:</h4>
          <p>The phenomenon of splitting white light into its seven component colours when it passes through a transparent medium (like a glass prism).</p>
        </div>
        <div className="memory-trick">
          <h4>Rainbow:</h4>
          <p>A natural phenomenon caused by the dispersion of sunlight by tiny water droplets in the atmosphere, which act like tiny prisms.</p>
        </div>
      </section>

      <div className="summary-box">
        <h4>Summary</h4>
        <ul>
          <li>Light is a form of energy that travels in straight lines.</li>
          <li>Reflection is bouncing back of light; refraction is bending of light.</li>
          <li>Mirrors (plane, concave, convex) and lenses (convex, concave) form different types of images.</li>
          <li>White light is composed of seven colours, which can be seen through dispersion.</li>
        </ul>
      </div>
    </div>
  );
};

export default LightNotes;
