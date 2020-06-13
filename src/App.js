import React, { useState, useEffect } from 'react';
import api from './services/api'

import Header from './components/Header'
import './App.css'

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, []) 
  async function handleAddProject() {
    const response = await api.post('repositories', {
      title: 'Meu Git 2',
      url: 'http://github.com/anapf9',
      techs: [ 
      'Vue',
      'Javascript'
      ]
    })

    const project = response.data 
    setProjects([...projects, project])
  }
  return (
    <>
    <Header title="homepage"> 
    </Header>

    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li> )}
    </ul>

    <button type="button" onClick={handleAddProject}>Add</button>
    </>
  )
}

export default App;