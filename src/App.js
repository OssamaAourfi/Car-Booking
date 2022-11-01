import React from 'react';

import Header from './components/header/Header';
import ChangeBack from './components/changeback/ChangeBack';
import Form from "./components/forms/From";
import Slide from "./components/slide/Slide";
import Card from "./components/Cards/Card"

function App() {
  return (
    <div className="App">
      <Header />
      <ChangeBack />
      <Form />
      <Slide />
      <Card />
    </div>
  );
}

export default App;
