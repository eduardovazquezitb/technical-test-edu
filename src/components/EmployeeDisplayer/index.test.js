import { render, screen, fireEvent } from '@testing-library/react'
import EmployeeDisplayer from '.'

test('Employee Displayer renders the full name', () => {
  const employee = {
    name: {
      first: 'Hans-J.',
      last: 'Kania'
    },
    email: 'hans-j..kania@example.com',
    picture: {
      medium: 'https://randomuser.me/api/portraits/med/men/87.jpg'
    }
  }
  render(<EmployeeDisplayer employee={employee} />)
  const name = screen.queryAllByText('Hans-J. Kania')
  expect(name.length).toBeGreaterThan(0)
})

test('Employee Displayer renders the email', () => {
  const employee = {
    name: {
      first: 'Hans-J.',
      last: 'Kania'
    },
    email: 'hans-j..kania@example.com',
    picture: {
      medium: 'https://randomuser.me/api/portraits/med/men/87.jpg'
    }
  }
  render(<EmployeeDisplayer employee={employee} />)
  const name = screen.queryAllByText('hans-j..kania@example.com')
  expect(name.length).toBeGreaterThan(0)
})

test('Employee Displayer renders the image', () => {
  const employee = {
    name: {
      first: 'Hans-J.',
      last: 'Kania'
    },
    email: 'hans-j..kania@example.com',
    picture: {
      medium: 'https://randomuser.me/api/portraits/med/men/87.jpg'
    }
  }
  render(<EmployeeDisplayer employee={employee} />)
  const image = screen.queryAllByAltText('Hans-J. Kania')
  expect(image.length).toBeGreaterThan(0)
  fireEvent.load(image[0])
})
