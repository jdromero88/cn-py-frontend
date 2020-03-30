import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './containers/Header'
import Content from './containers/Content'
import Footer from './containers/Footer'
import Inicio from './components/Inicio'
import Acerca from './components/Acerca'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/inicio' component={ Inicio } />
        <Route exact path='/acerca' component={ Acerca } />
      </Switch>
      <Content />
      <Footer />
    </>
  );
}

export default App;
