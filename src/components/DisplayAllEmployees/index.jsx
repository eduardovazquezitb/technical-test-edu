import data from '../../resources/dataSamples/employees'
import EmployeeDisplayer from '../EmployeeDisplayer'

const DisplayAllEmployees = () => {
  return (
    data.map((employee, id) =>
      <EmployeeDisplayer key={id} employee={employee} />
    )
  )
}

export default DisplayAllEmployees
