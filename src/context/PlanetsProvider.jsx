import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import PlanetsContext from './PlanetsContext';

export function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [coluna, setColuna] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [buttonFilter, setButtonFilter] = useState([]);
  const [arrayColumn, setArrayColumn] = useState(
    [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
  );

  function getApi() {
    fetch('https://swapi.dev/api/planets')
      .then((response) => response.json())
      .then((data) => {
        const planetas = data.results.map((result) => {
          delete result.residents;
          return result;
        });
        setPlanets(planetas);
      });
  }

  const values = useMemo(() => ({
    getApi,
    planets,
    setPlanets,
    pesquisa,
    setPesquisa,
    coluna,
    setColuna,
    comparison,
    setComparison,
    value,
    setValue,
    buttonFilter,
    setButtonFilter,
    arrayColumn,
    setArrayColumn,
  }), [planets, pesquisa, coluna, comparison, value, buttonFilter, arrayColumn]);
  return (
    <PlanetsContext.Provider value={ values }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
