import { render, screen, fireEvent } from '@testing-library/react'
import DisplayAllEmployees from '.'

test('render the hardcoded datasamples', () => {
  render(<DisplayAllEmployees />)
  const employees = screen.queryAllByTestId('employee-displayer')
  expect(employees.length).toBe(5)
})

test('last person\'s name is loaded', () => {
  render(<DisplayAllEmployees />)
  const person = screen.queryAllByText('Arpitha Patil')
  expect(person.length).toBeGreaterThan(0)
})

test('fourth person\'s email is loaded', () => {
  render(<DisplayAllEmployees />)
  const person = screen.queryAllByText('milla.kivela@example.com')
  expect(person.length).toBeGreaterThan(0)
})

test('third person\'s img is loaded', () => {
  render(<DisplayAllEmployees />)
  const image = screen.queryAllByAltText('Hans-J. Kania')
  expect(image.length).toBeGreaterThan(0)
  fireEvent.load(image[0])
})
