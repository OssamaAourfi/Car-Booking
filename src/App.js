import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header/Header';
import ChangeBack from './components/changeback/ChangeBack';
import Form from "./components/forms/From";
import Slide from "./components/slide/Slide";
import Card from "./components/Cards/Card";
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <ChangeBack />
      <Form />
      <Slide />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
