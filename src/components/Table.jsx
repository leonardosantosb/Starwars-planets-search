import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Table() {
  const
    {
      planets,
      pesquisa,
      buttonFilter,
      setButtonFilter,
      planetsHander,
      setPlanetsHander,
    } = useContext(PlanetsContext);

  const trataDados = () => {
    const filterPlanetName = planets.filter((planet) => planet.name.toLowerCase()
      .includes(pesquisa.toLowerCase()));
    const filterNameNCondition = filterPlanetName.filter((plan) => {
      const filterResults = buttonFilter.map(({ value, comparison, coluna }) => {
        switch (comparison) {
        case 'maior que':
          return Number(plan[coluna]) > Number(value);
        case 'menor que':
          return Number(plan[coluna]) < Number(value);
        case 'igual a':
          return Number(plan[coluna]) === Number(value);
        default:
          return true;
        }
      });
      return filterResults.every((el) => el);
    });
    setPlanetsHander(filterNameNCondition);
  };
  useEffect(() => {
    trataDados();
  }, [buttonFilter, pesquisa]);

  const removeFilters = (value) => {
    const remove = buttonFilter.filter((btnFilter) => btnFilter !== value);
    setButtonFilter(remove);
    return remove;
  };

  return (
    <>
      { buttonFilter.map((filtros, index) => (
        <span key={ index }>
          <div data-testid="filter">
            {filtros.coluna}
            {' '}
            {filtros.comparison}
            {' '}
            {filtros.value}
            {' '}
            <button
              type="button"
              onClick={ () => removeFilters(filtros) }
            >
              Remover
            </button>
          </div>
        </span>))}
      <button
        data-testid="button-remove-filters"
        type="button"
        onClick={ () => { setButtonFilter([]); } }
      >
        Remove All

      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            planetsHander.map((planet) => (
              <tr key={ planet.created }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}
