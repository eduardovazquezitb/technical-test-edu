import React from 'react'
import { render, screen, waitForElement, fireEvent } from '@testing-library/react'
// import axiosMock from 'axios'
import DynamicAllEmployeesDisplayer from './index.jsx'

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
  render(<DynamicAllEmployeesDisplayer />)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const button = screen.queryAllByTestId('add-employee-button')
  fireEvent.click(button[0])
  const employees = screen.queryAllByTestId('employee-displayer')
  expect(employees.length).toBe(1)
})

it('should display three employees after clicking the button thrice', async () => {
  render(<DynamicAllEmployeesDisplayer />)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const button = screen.queryAllByTestId('add-employee-button')
  fireEvent.click(button[0])
  fireEvent.click(button[0])
  fireEvent.click(button[0])
  const employees = screen.queryAllByTestId('employee-displayer')
  expect(employees.length).toBe(3)
})

it('should display no employees after clicking the button six times', async () => {
  render(<DynamicAllEmployeesDisplayer />)
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const button = screen.queryAllByTestId('add-employee-button')
  for (let i = 0; i < 6; i++) {
    fireEvent.click(button[0])
  }
  const employees = screen.queryAllByTestId('employee-displayer')
  expect(employees.length).toBe(0)
})

/*
it('should load and display the data', async () => {
  const url = '/greeting'
  const { getByTestId } = render(<DynamicAllEmployeesDisplayer url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' }
  })

  fireEvent.click(getByTestId('fetch-data'))

  const greetingData = await waitForElement(() => getByTestId('show-data'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(greetingData).toHaveTextContent('hello there')
})
*/
