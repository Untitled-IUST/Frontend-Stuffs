import '../css/DenominationItem.css'
const DenominationItem = props => {
  const {value, stateChange, onButtonClick} = props
  const changeState = () => {
    stateChange(value)
  }
  return (
    <li className="item-holder">
      <button type="button" className="btn" onClick={() => onButtonClick(value)}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem