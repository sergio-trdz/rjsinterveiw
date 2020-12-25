import React from 'react';
import Entrevistadores from './Components/Utilities/Entrevistadores'
import Candidato from './Components/Utilities/Candidato'
import Preguntas from './Components/Utilities/Preguntas'
import Resumen from './Components/Utilities/Resumen'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Entrevistadores />
      <Candidato />
      <Preguntas /> */}
      <Resumen />
    </div>
  );
}

export default App;
