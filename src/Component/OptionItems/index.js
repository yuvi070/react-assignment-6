import {OptionButton, OptionImage} from './styled'

const OptionItems = props => {
  const {each, onClickOption} = props
  const testId = value => {
    switch (value) {
      case 'ROCK':
        return 'rockButton'
      case 'SCISSORS':
        return 'scissorsButton'
      case 'PAPER':
        return 'paperButton'
      default:
        return null
    }
  }
  const onClickButton = () => {
    onClickOption(each.id)
  }

  return (
    <li key={each.id}>
      <OptionButton
        type="button"
        onClick={onClickButton}
        data-testid={testId(each.id)}
      >
        <OptionImage src={each.imageUrl} alt={each.id} />
      </OptionButton>
    </li>
  )
}

export default OptionItems
