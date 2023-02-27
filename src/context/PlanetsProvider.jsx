import PropTypes from 'prop-types';
import { useState } from 'react';
import PlanetsContext from './PlanetsContext';

export function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

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
