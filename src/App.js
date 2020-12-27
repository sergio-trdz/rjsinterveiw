import React from 'react';
import './App.css';
import Home from './Pages/Home/index.jsx'
import Candidato from './Pages/Candidato/index.jsx'
import Preguntas from './Pages/Preguntas/index.jsx'
import Resultados from './Pages/Resultados/index.jsx'
import Layout from './Components/Layout/index.jsx'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'> 
          <Home />
        </Route>
        <Route exact path='/candidato'>
          <Candidato />
        </Route>
        <Route exact path='/preguntas'>
          <Preguntas />
        </Route>
        <Route exact path='/resultados'>
          <Resultados />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;