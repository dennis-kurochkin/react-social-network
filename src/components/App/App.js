import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="App bg-gray-100">
      <div className="App__Inner grid grid-cols-3 min-h-screen">

        <Header className="col-span-3" />

        <div className="container col-span-3 grid grid-cols-3 items-start gap-4 mx-auto p-6">

          <Sidebar className="col-span-1" />

          <main className="App__Main col-span-2 bg-white shadow-md">

          </main>

      </div>

      <Footer className="col-span-3" />

    </div>
    </div >
  );
}

export default App;
