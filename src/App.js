import React from 'react';

import Header from './components/Header'

function App() {
  return (
    <>
    <Header title="homepage"> 
    <ul>
      <li> qualquer coisa</li>
      <li> qualquer coisa 2</li>
    </ul>
    </Header>
    <Header title="Teste props">
    <ul>
      <li> Outra</li>
      <li> teste coisa 2</li>
    </ul>
    </Header>
    </>
  )
}

export default App;