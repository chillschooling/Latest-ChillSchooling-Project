
import React from 'react';
import { useInView } from 'react-intersection-observer';
import CBSE from './CBSE';
import JEE from './JEE';
import NEET from './NEET';
import './Resources.css';

const Resources: React.FC = () => {
  const { ref: cbseRef, inView: cbseInView } = useInView({ triggerOnce: true });
  const { ref: jeeRef, inView: jeeInView } = useInView({ triggerOnce: true });
  const { ref: neetRef, inView: neetInView } = useInView({ triggerOnce: true });

  return (
    <div className="resources-container">
      <div ref={cbseRef} className={`resource-section ${cbseInView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <h2><i className="fas fa-university"></i> CBSE</h2>
        <CBSE />
      </div>

      <div ref={jeeRef} className={`resource-section ${jeeInView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <h2><i className="fas fa-atom"></i> JEE</h2>
        <JEE />
      </div>

      <div ref={neetRef} className={`resource-section ${neetInView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <h2><i className="fas fa-stethoscope"></i> NEET</h2>
        <NEET />
      </div>
    </div>
  );
};

export default Resources;
