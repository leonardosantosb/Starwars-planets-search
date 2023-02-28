import PropTypes from 'prop-types';
import { useState } from 'react';
import PlanetsContext from './PlanetsContext';

export function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [pesquisa, setPesquisa] = useState('');
  const [coluna, setColuna] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [buttonFilter, setButtonFilter] = useState([]);
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

  const values = {
    planets,
    setPlanets,
    getApi,
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
  };
  return (
    <PlanetsContext.Provider value={ values }>
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
