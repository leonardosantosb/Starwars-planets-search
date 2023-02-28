import React from 'react';
import './App.css';
import InputPesquisa from './components/InputPesquisa';
import ColumnFilter from './components/ColumnFilter';
import Table from './components/Table';
import { PlanetsProvider } from './context/PlanetsProvider';
import ComparisonFilter from './components/ComparisonFilter';
import ValueFilter from './components/ValueFilter';
import ButtonFilter from './components/ButtonFilter';

function App() {
  return (
    <PlanetsProvider>
      <InputPesquisa />
      <ColumnFilter />
      <ComparisonFilter />
      <ValueFilter />
      <ButtonFilter />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
