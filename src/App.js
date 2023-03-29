import React from 'react';
import './App.css';
import Hashtag from './components/Hashtag';
import Header from './components/Header';
import Input from './objects/Input';
import Label from './objects/Label';
function App() {
  return (
    <main className='app'>
      <Header/>
      <Hashtag/>  
      <Input value="show"/>
      <Label content="Mostrar eventos"/>
    </main>
  );
}

export default App;
