import React from 'react';
import Entrevistadores from './Components/Utilities/Entrevistadores';
import Candidato from './Components/Utilities/Candidato';
import Preguntas from './Components/Utilities/Preguntas';
import Resumen from './Components/Utilities/Resumen';
import './App.css';
import NewComponent from './Components/Utilities/NewComponent';
import Home from './Pages/Home/index.jsx'
import Layout from './Components/Layout/index.jsx'

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
