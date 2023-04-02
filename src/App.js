import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
import Input from './objects/Input';
function App() {
  return (
    <main className='app'>
      <Header/>
      <Hashtag/>  
      <Input id="show" value="show" content="Mostrar eventos" type="checkbox"/>
    </main>
  );
}

export default App;
