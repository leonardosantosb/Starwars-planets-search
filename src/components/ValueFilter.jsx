import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ValueFilter() {
  const { setValue, value } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="valor">
        Valor
        <br />
        <input
          name="value"
          data-testid="value-filter"
          id="valor"
          type="number"
          value={ value }
          onChange={ (e) => (setValue(e.target.value)) }
        />
      </label>

    </div>
  );
}
