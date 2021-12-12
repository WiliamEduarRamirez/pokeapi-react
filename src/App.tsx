import React from 'react';
import './App.css';
import Navbar from './app/layouts/navbar/Navbar';
import { Container } from '@material-ui/core';
import PokemonPage from './app/pages/PokemonPage';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <PokemonPage />
      </Container>
    </React.Fragment>
  );
}

export default App;
