import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true });

  return (
    <div className="home-container">
      <div ref={heroRef} className={`hero-section ${heroInView ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <h1 className="hero-headline">CHILL SCHOOLING</h1>
          <p className="hero-subheadline">Let's Score & CHill!</p>
          <Link to="/resources" className="btn btn-primary btn-lg cta-button">Start Learning</Link>
        </div>
      </div>

      <div ref={whyRef} className={`why-us-section text-center ${whyInView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <h2>Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4 feature-item">
            <i className="fas fa-book-open fa-3x"></i>
            <h3>Expert Content</h3>
            <p>Learn from the best with our expert-curated content.</p>
          </div>
          <div className="col-md-4 feature-item">
            <i className="fas fa-users fa-3x"></i>
            <h3>Community</h3>
            <p>Join a vibrant community of learners and educators.</p>
          </div>
          <div className="col-md-4 feature-item">
            <i className="fas fa-laptop-code fa-3x"></i>
            <h3>Interactive Learning</h3>
            <p>Engage with our interactive and hands-on learning modules.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
