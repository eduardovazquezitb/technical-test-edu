import { Frame, Img, InfoList } from './styles'

const EmployeeDisplayer = ({ employee = {} }) => {
  const { name = {} } = employee
  const { first = '', last = '' } = name
  const { email = '' } = employee
  const { picture = {} } = employee
  const { medium = '' } = picture
  return (
    <Frame data-testid='employee-displayer'>
      <Img alt={first + ' ' + last} src={medium} />
      <InfoList>
        <p><b>{first + ' ' + last}</b></p>
        <p>{email}</p>
      </InfoList>
    </Frame>
  )
}

export default EmployeeDisplayer
