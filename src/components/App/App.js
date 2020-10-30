import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App__inner">
        <Header />
        <Sidebar />
        <main className="App__main">
        
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
