import { useState } from 'react'
import data from '../../resources/dataSamples/employees'
import { Button } from './styles'
import EmployeeDisplayer from '../EmployeeDisplayer'

const DynamicAllEmployeesDisplayer = () => {
  const [numberOfEmployeesState, setNumberOfEmployeesState] = useState(0)

  const increaseNumberOfEmployees = () => {
    if (numberOfEmployeesState === data.length) {
      setNumberOfEmployeesState(0)
    } else {
      setNumberOfEmployeesState(numberOfEmployeesState + 1)
    }
  }

  return (
    <>
      <Button onClick={() => increaseNumberOfEmployees()}>
        Add Employee
      </Button>
      {data.filter((_, id) => id < numberOfEmployeesState)
        .map((employee, id) =>
          <EmployeeDisplayer key={id} employee={employee} />
        )}
    </>
  )
}

export default DynamicAllEmployeesDisplayer
