import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ChangeBack from './components/changeback/ChangeBack';
import Form from "./components/forms/From";
import Slide from "./components/slide/Slide"

function App() {
  return (
    <div className="App">
      <Header />
      <ChangeBack />
      <Form />
      <Slide />
    </div>
  );
}

export default App;
