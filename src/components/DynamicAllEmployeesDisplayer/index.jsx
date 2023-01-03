import { useState } from 'react'
import { Button } from './styles'
import { useEmployees } from '../../api/Api'
import EmployeeDisplayer from '../EmployeeDisplayer'

const DynamicAllEmployeesDisplayer = () => {
  const [numberOfEmployeesState, setNumberOfEmployeesState] = useState(0)
  const [employees] = useEmployees()

  const increaseNumberOfEmployees = () => {
    if (numberOfEmployeesState === employees.length) {
      setNumberOfEmployeesState(0)
    } else {
      setNumberOfEmployeesState(numberOfEmployeesState + 1)
    }
  }

  return (
    <>
      <Button onClick={() => increaseNumberOfEmployees()} data-testid='add-employee-button'>
        Add Employee
      </Button>
      {employees.filter((_, id) => id < numberOfEmployeesState)
        .map((employee, id) =>
          <EmployeeDisplayer key={id} employee={employee} />
        )}
    </>
  )
}

export default DynamicAllEmployeesDisplayer
