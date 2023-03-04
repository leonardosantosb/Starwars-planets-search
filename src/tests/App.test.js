import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import testData from './mock'
import { act } from '@testing-library/react';

const mockfetch = () => {
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    status:200,
    ok: true,
    json: () => Promise.resolve(testData)
  })) 
  }

describe('requisito numero 1', () => {
  beforeEach(mockfetch)
afterEach(cleanup)

test('teste se existe os inputs e se da para usa-los', async () => {
  await act(async () => {render(<App />)});
  const inputText = screen.getByRole('textbox', { name: /projeto star wars \- trybe/i })
  expect(inputText).toBeInTheDocument();
  expect(inputText).toHaveValue('')
  const TESTE1 = await screen.getByRole('cell', { name: /bespin/i })
  expect(TESTE1).toBeInTheDocument()
  userEvent.type(inputText, 'o')
  expect(inputText).toHaveValue('o')
  const TESTE2 = await screen.queryByRole('cell', { name: /bespin/i })
  expect(TESTE2).not.toBeInTheDocument()
  const inputColunm = screen.getByRole('combobox', { name: /coluna/i })
  expect(inputColunm).toBeInTheDocument();
  userEvent.dblClick(inputColunm)
  expect(screen.getByRole('option', {name: 'population'}).selected).toBe(true)
  const inputOperador = screen.getByRole('combobox', {name: /operador/i})
  expect(inputOperador).toBeInTheDocument()
  userEvent.dblClick(inputOperador)
  const inputValue = screen.getByRole('spinbutton', {name: /valor/i})
  expect(inputValue).toBeInTheDocument()
  userEvent.type(inputValue, '10')
});
test('teste a coluna ', async () => {
  await act(async () => {render(<App />)});
const coluna = screen.getByRole('combobox', { name: /coluna/i })
const buttonFiltro = screen.getByRole('button', {name: /filtrar/i})
expect(coluna).toHaveLength(5)
userEvent.selectOptions(coluna,'population')
userEvent.click(buttonFiltro)
expect(coluna).toHaveLength(4)
const removebut = screen.queryByRole('button', { name: /remover/i })
expect(removebut).toBeInTheDocument()
userEvent.click(removebut)
expect(removebut).not.toBeInTheDocument()


});
test('teste o operador ', async () => {
  await act(async () => {render(<App />)});
const operador = screen.getByRole('combobox', { name: /operador/i })
userEvent.selectOptions(operador,'igual a')
const buttonFiltro = screen.getByRole('button', {name: /filtrar/i})
userEvent.click(buttonFiltro)
userEvent.selectOptions(operador,'menor que')
userEvent.click(buttonFiltro)
// expect(userEvent.selectOptions(operador,'').toBe('true'))

});

test('teste o remove all ', async () => {
  await act(async () => {render(<App />)});
  const buttonFiltro = screen.getByRole('button', {name: /filtrar/i})
  userEvent.click(buttonFiltro)
  const removebut = screen.queryByRole('button', { name: /remover/i })
expect(removebut).toBeInTheDocument()
const removeAll = screen.getByRole('button', { name: /remove all/i })
userEvent.click(removeAll)
expect(removebut).not.toBeInTheDocument()


});

})
