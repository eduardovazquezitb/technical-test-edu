import React from 'react'
import { render, screen, fireEvent, waitFor, findByTestId } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import axiosMock from 'axios'
import data from '../../resources/dataSamples/employees'
import DynamicAllEmployeesDisplayer from './index.jsx'

jest.mock('axios')

it('should display a button', () => {
  render(<DynamicAllEmployeesDisplayer />)
  const button = screen.queryAllByTestId('add-employee-button')
  expect(button.length).toBe(1)
})

it('should not display any employee', () => {
  render(<DynamicAllEmployeesDisplayer />)
  const employees = screen.queryAllByTestId('employee-displayer')
  expect(employees.length).toBe(0)
})

it('should display one employee after clicking the button', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: { results: data }
  })
  await act(async () => {
    render(<DynamicAllEmployeesDisplayer />)
    await new Promise((resolve) => setTimeout(resolve, 600))
  })
  const button = screen.getByTestId('add-employee-button')
  fireEvent.click(button)
  expect(screen.getByTestId('employee-displayer')).toBeInTheDocument()
})

it('should display three employees after clicking the button thrice', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: { results: data }
  })
  await act(async () => {
    render(<DynamicAllEmployeesDisplayer />)
    await new Promise((resolve) => setTimeout(resolve, 600))
  })
  const button = screen.getByTestId('add-employee-button')
  fireEvent.click(button)
  fireEvent.click(button)
  fireEvent.click(button)
  expect(screen.queryAllByTestId('employee-displayer').length).toBe(3)
})

it('should display 0 employees after clicking the button six times', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: { results: data }
  })
  await act(async () => {
    render(<DynamicAllEmployeesDisplayer />)
    await new Promise((resolve) => setTimeout(resolve, 200))
  })
  const button = screen.getByTestId('add-employee-button')
  for (let i = 0; i < 6; i++) { fireEvent.click(button) }
  expect(screen.queryAllByTestId('employee-displayer').length).toBe(0)
})
