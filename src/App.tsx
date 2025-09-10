import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import ClassResources from './pages/ClassResources';
import ChapterList from './pages/ChapterList';
import ChapterContent from './pages/ChapterContent'; // Import the new component
import DynamicNotesLoader from './pages/DynamicNotesLoader';
import JEE from './pages/JEE';
import NEET from './pages/NEET';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/cbse/class/:grade" element={<ClassResources />} />
          <Route path="/resources/cbse/class/:grade/:subject/chapters" element={<ChapterList />} />
          <Route path="/resources/cbse/class/:grade/:subject/chapters/:chapterName" element={<ChapterContent />} /> {/* New route for chapter content */}
          <Route path="/resources/cbse/class/:grade/:subject/:chapterName/notes" element={<DynamicNotesLoader />} />
          <Route path="/resources/jee" element={<JEE />} />
          <Route path="/resources/neet" element={<NEET />} />
          <Route path="/resources/jee/class/:grade" element={<ClassResources />} />
          <Route path="/resources/neet/class/:grade" element={<ClassResources />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;