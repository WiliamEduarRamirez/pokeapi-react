import React from 'react';
import './App.css';
import Navbar from './app/layouts/navbar/Navbar';
import { Container } from '@material-ui/core';
import PokemonPage from './app/pages/PokemonPage';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  heroContent: {
    marginTop: 80
  }
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Navbar />
      <main style={{ backgroundColor: '#F8FAFC' }}>
        <Container component='main' className={classes.heroContent}>
          <PokemonPage />
        </Container>
      </main>
    </React.Fragment>
  );
}

export default App;
