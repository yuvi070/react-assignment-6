import {OptionButton, OptionImage} from './styled'

const OptionItems = props => {
  const {each, onClickOption} = props
  const onClickButton = () => {
    onClickOption(each.id)
  }
  return (
    <li key={each.id}>
      <OptionButton type="button" onClick={onClickButton}>
        <OptionImage src={each.imageUrl} alt={each.id} />
      </OptionButton>
    </li>
  )
}

export default OptionItems
