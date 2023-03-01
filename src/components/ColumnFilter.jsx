import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ColumnFilter() {
  const { setColuna, coluna, arrayColumn } = useContext(PlanetsContext);

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
          {arrayColumn
            .map((coluns, index) => (
              <option key={ index }>{ coluns }</option>
            ))}

        </select>
      </label>

    </div>
  );
}
