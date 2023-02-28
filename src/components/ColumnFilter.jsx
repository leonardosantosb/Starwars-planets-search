import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ColumnFilter() {
  const { setColuna, coluna } = useContext(PlanetsContext);

  return (
    <div>
      <label htmlFor="column">
        Coluna
        <br />
        <select
          name="column"
          data-testid="column-filter"
          id="column"
          type="select"
          value={ coluna }
          onChange={ (e) => (setColuna(e.target.value)) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>

    </div>
  );
}
