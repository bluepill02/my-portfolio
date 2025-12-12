import React from 'react';
import Hero from './components/Hero';
import RepoGrid from './components/RepoGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <main className="container">
        <RepoGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
