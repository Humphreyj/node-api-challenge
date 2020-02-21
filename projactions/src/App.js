import React from 'react';
import Projects from './components/Projects';
import Project from './components/Project';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Projects} />
      <Route path= '/projects/:id' component={Project} />
      
      
    </div>
  );
}

export default App;
