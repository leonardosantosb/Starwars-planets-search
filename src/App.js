import React from 'react';
import './App.css';
import InputPesquisa from './components/InputPesquisa';
import Table from './components/Table';
import { PlanetsProvider } from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <InputPesquisa />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
