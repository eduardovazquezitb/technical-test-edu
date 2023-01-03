import { render, screen, fireEvent } from '@testing-library/react'
import DisplayAllEmployees from '.'

test('render the hardcoded datasamples', () => {
  render(<DisplayAllEmployees />)
  const employees = screen.queryAllByTestId('employee-displayer')
  expect(employees.length).toBe(5)
})

test('last person\'s name is loaded', () => {
  render(<DisplayAllEmployees />)
  const person = screen.queryAllByText('Séléna Sanchez')
  expect(person.length).toBeGreaterThan(0)
})

test('fourth person\'s email is loaded', () => {
  render(<DisplayAllEmployees />)
  const person = screen.queryAllByText('arpitha.patil@example.com')
  expect(person.length).toBeGreaterThan(0)
})

test('third person\'s img is loaded', () => {
  render(<DisplayAllEmployees />)
  const image = screen.queryAllByAltText('Javier Wood')
  expect(image.length).toBeGreaterThan(0)
  fireEvent.load(image[0])
})
