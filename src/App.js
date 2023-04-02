import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
import Checkbox from './objects/Checkbox';
function App() {
  return (
    <main className='app'>
      <Header/>
      <Hashtag/>  
      <Checkbox id="show" value="show" content="Mostrar eventos" type="checkbox"/>
    </main>
  );
}

export default App;
