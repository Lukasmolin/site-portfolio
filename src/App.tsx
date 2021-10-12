import React from 'react';
import './App.css';
import BaseButton from './components/baseButton/BaseButton';
import CardButton from './components/cardButton/CardButton';
import PrimaryButton from './components/primaryButton/PrimaryButton';
import SecondaryButton from './components/secondaryButton/SecondaryButton';

function App() {
  return <div className="wrapper">
    {CardButton({ text:'Texto', svgIconPath:'java.svg'})}
  </div>
}

export default App;
