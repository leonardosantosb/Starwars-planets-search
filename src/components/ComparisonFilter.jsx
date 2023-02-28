import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ComparisonFilter() {
  const { setComparison, comparison } = useContext(PlanetsContext);
  return (
    <div>
      <label htmlFor="comparison">
        Operador
        <br />
        <select
          name="comparison"
          data-testid="comparison-filter"
          id="comparison"
          type="select"
          value={ comparison }
          onChange={ (e) => (setComparison(e.target.value)) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>

    </div>
  );
}
