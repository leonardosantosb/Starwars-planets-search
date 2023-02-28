import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ButtonFilter() {
  const {
    setButtonFilter,
    value,
    comparison,
    coluna,
    buttonFilter } = useContext(PlanetsContext);

  return (
    <>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => (setButtonFilter([...buttonFilter, { value,
          comparison,
          coluna }])) }
      >
        FILTRAR
      </button>
      { console.log(buttonFilter)}
    </>
  );
}
