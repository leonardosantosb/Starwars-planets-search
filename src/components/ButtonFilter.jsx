import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function ButtonFilter() {
  const {
    setButtonFilter,
    value,
    comparison,
    coluna,
    buttonFilter,
    arrayColumn,
    setArrayColumn,
    setColuna } = useContext(PlanetsContext);

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ () => {
        setArrayColumn(
          arrayColumn.filter((colums) => colums !== coluna),
        );
        setColuna(arrayColumn.filter((colums) => colums !== coluna)[0]);
        setButtonFilter([...buttonFilter, { value,
          comparison,
          coluna }]);
      } }
    >
      FILTRAR
    </button>
  );
}
