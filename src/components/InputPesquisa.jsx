import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function InputPesquisa() {
  const { setPesquisa } = useContext(PlanetsContext);

  return (
    <div>
      <label htmlFor="search">
        Projeto Star Wars - Trybe
        <br />
        <input
          data-testid="name-filter"
          id="search"
          type="text"
          onChange={ (e) => (setPesquisa(e.target.value)) }
        />
      </label>

    </div>
  );
}
