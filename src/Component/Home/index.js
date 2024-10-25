import {Component} from 'react'
import Popup from 'reactjs-popup'
import OptionItems from '../OptionItems'
import {
  LogoHeading,
  BottomDiv,
  ScoreDiv,
  HomeDiv,
  Body,
  NavBar,
  RulesDiv,
  RulesButton,
  ResultDiv,
  OptionImage,
  ResultImageDiv,
  ResultBottomDiv,
  PlayAgainButton,
  RulesImage,
  RulesImageDiv,
  Score,
} from './styled'

const gameConstants = ['ROCK', 'SCISSORS', 'PAPER']

class Home extends Component {
  state = {
    score: 0,
    isPlaying: true,
    gameResult: '',
    randomNumber1: '',
    randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
  }

  //   componentDidMount() {
  //     const {randomNumber2} = this.state
  //     console.log(randomNumber2)
  //   }
  onClickOption = id => {
    const {randomNumber2} = this.state
    // Another Login implemented:)
    if (id === 'PAPER') {
      if (randomNumber2 === 'SCISSORS') {
        console.log('You Lose')
        this.setState(prev => ({
          score: prev.score - 1,
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'YOU LOSE',
        }))
      } else if (randomNumber2 === 'ROCK') {
        console.log('You Win')
        this.setState(prev => ({
          score: prev.score + 1,
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'YOU WON',
        }))
      } else {
        console.log('Draw')
        this.setState(prev => ({
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'IT IS DRAW',
        }))
      }
    }
    if (id === 'SCISSORS') {
      if (randomNumber2 === 'ROCK') {
        console.log('You Lose')
        this.setState(prev => ({
          score: prev.score - 1,
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'YOU LOSE',
        }))
      } else if (randomNumber2 === 'PAPER') {
        console.log('You Win')
        this.setState(prev => ({
          score: prev.score + 1,
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'YOU WON',
        }))
      } else {
        console.log('Draw')
        this.setState(prev => ({
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'DRAW',
        }))
      }
    }
    if (id === 'ROCK') {
      if (randomNumber2 === 'PAPER') {
        console.log('You Lose')
        this.setState(prev => ({
          score: prev.score - 1,
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'YOU LOSE',
        }))
      } else if (randomNumber2 === 'SCISSORS') {
        console.log('You Win')
        this.setState(prev => ({
          score: prev.score + 1,
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'YOU WON',
        }))
      } else {
        console.log('Draw')
        this.setState(prev => ({
          isPlaying: !prev.isPlaying,
          randomNumber1: id,
          gameResult: 'DRAW',
        }))
      }
    }
  }

  onClickPlayAgain = () => {
    this.setState(prev => ({
      isPlaying: !prev.isPlaying,
      randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
    }))
  }

  render() {
    const {choicesList} = this.props
    const {
      score,
      isPlaying,
      randomNumber1,
      gameResult,
      randomNumber2,
    } = this.state
    const yourImg = choicesList.find(each => each.id === randomNumber1)
    const opponentImg = choicesList.find(each => each.id === randomNumber2)
    return (
      <HomeDiv>
        <Body>
          <NavBar>
            <div>
              <LogoHeading>Rock</LogoHeading>
              <LogoHeading>Paper</LogoHeading>
              <LogoHeading>Scissor</LogoHeading>
            </div>
            <ScoreDiv>
              <Score>Score</Score>
              <h1>{score}</h1>
            </ScoreDiv>
          </NavBar>
          {isPlaying ? (
            <BottomDiv as="ul">
              {choicesList.map(each => (
                <OptionItems
                  onClickOption={this.onClickOption}
                  each={each}
                  key={each.id}
                />
              ))}
            </BottomDiv>
          ) : (
            <>
              <ResultDiv>
                <ResultImageDiv>
                  <h1>You</h1>
                  <OptionImage src={yourImg.imageUrl} />
                </ResultImageDiv>
                <ResultImageDiv>
                  <h1>Opponent</h1>
                  <OptionImage src={opponentImg.imageUrl} />
                </ResultImageDiv>
              </ResultDiv>
              <ResultBottomDiv>
                <h1>{gameResult}</h1>
                <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
                  Play Again
                </PlayAgainButton>
              </ResultBottomDiv>
            </>
          )}

          <RulesDiv>
            <Popup
              modal
              trigger={<RulesButton type="button">Rules</RulesButton>}
            >
              <RulesImageDiv>
                <RulesImage
                  alt="rules"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                />
              </RulesImageDiv>
            </Popup>
          </RulesDiv>
        </Body>
      </HomeDiv>
    )
  }
}

export default Home
