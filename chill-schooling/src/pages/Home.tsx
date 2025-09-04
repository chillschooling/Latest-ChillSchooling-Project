import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './Home.css';
import 'animate.css';

const Home: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: whyRef, inView: whyInView } = useInView({ triggerOnce: true });
  const { ref: coursesRef, inView: coursesInView } = useInView({ triggerOnce: true });
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true });

  return (
    <div className="home-container">
      <div ref={heroRef} className={`hero-section ${heroInView ? 'animate__animated animate__fadeIn' : ''}`}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <h1 className="hero-headline animate__animated animate__fadeInDown">CHILL SCHOOLING</h1>
          <p className="hero-subheadline animate__animated animate__fadeInUp">Let's Score & CHill!</p>
          <Link to="/resources" className="btn btn-primary btn-lg cta-button animate__animated animate__pulse">Start Learning</Link>
        </div>
      </div>

      <div ref={missionRef} className={`our-mission-section text-center ${missionInView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <h2>Our Mission</h2>
        <p className="lead">To provide accessible, engaging, and high-quality education for everyone, everywhere.</p>
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

      <div ref={coursesRef} className={`featured-courses-section ${coursesInView ? 'animate__animated animate__fadeIn' : ''}`}>
        <h2 className="text-center">Featured Courses</h2>
        <div className="row">
          {/* Placeholder for course cards */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Course 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Course 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Course 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={testimonialsRef} className={`testimonials-section text-center ${testimonialsInView ? 'animate__animated animate__fadeInUp' : ''}`}>
        <h2>What Our Students Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="lead">"This is the best platform for learning!"</p>
              <footer className="blockquote-footer">Student A</footer>
            </div>
            <div className="carousel-item">
              <p className="lead">"I have learned so much from these courses."</p>
              <footer className="blockquote-footer">Student B</footer>
            </div>
            <div className="carousel-item">
              <p className="lead">"Highly recommended!"</p>
              <footer className="blockquote-footer">Student C</footer>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
