import React, { useState } from 'react';

import Header from './components/Header'
import './App.css'
import background from './assets/united-nations-covid-19-response-pRi0DvmiFf8-unsplash.jpg'

function App() {
  const [projects, setProjects] = useState([
    'dev web',
    'frontend'
  ]) 
  // use state retorna um array com 2 posições
  //1.  Varivael com o valor inicial
  //2. Função para atualizar o valor
  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`) // alterando o array original

    // dessa forma é como se criasse um novo Array a partir do original e acrescenta o valor desejado nesse novo array sem mudar o original
    // então setamos para usar o novo array
    setProjects([...projects, `Novo projeto ${Date.now()}`]) // aplicando o conceito de imutabilidade
    
    // console.log(projects)
  }
  return (
    <>
    <Header title="homepage"> 
    </Header>

    <img width={300} src={background} />
    <ul>
      {projects.map(project => <li key={project}>{project}</li> )}
    </ul>

    <button type="button" onClick={handleAddProject}>Add</button>
    </>
  )
}

export default App;