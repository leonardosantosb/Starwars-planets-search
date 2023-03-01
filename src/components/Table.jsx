import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Table() {
  const
    {
      getApi,
      planets,
      pesquisa,
      buttonFilter,
    } = useContext(PlanetsContext);

  useEffect(() => {
    getApi();
  }, []);

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
    return filterNameNCondition;
  };

  return (
    <>
      { buttonFilter.map((filtros, index) => (
        <span key={ index }>
          <div>
            {filtros.coluna}
            {' '}
            {filtros.comparison}
            {' '}
            {filtros.value}
            {' '}
            <button type="button">Remover</button>
          </div>
        </span>))}
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
            trataDados().map((planet) => (
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
