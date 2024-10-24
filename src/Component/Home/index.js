import {Component} from 'react'
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
    if (id === 'PAPER' && randomNumber2 === 'ROCK') {
      console.log('Won')
      this.setState(prev => ({
        randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
        score: prev.score + 1,
        isPlaying: !prev.isPlaying,
        randomNumber1: id,
        gameResult: 'YOU WON',
      }))
    } else if (id === 'SCISSORS' && randomNumber2 === 'ROCK') {
      console.log('Lose')
      this.setState(prev => ({
        randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
        score: prev.score - 1,
        isPlaying: !prev.isPlaying,
        randomNumber1: id,
        gameResult: 'YOU LOSE',
      }))
    } else if (id === 'ROCK' && randomNumber2 === 'PAPER') {
      console.log('Lose')
      this.setState(prev => ({
        randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
        score: prev.score - 1,
        isPlaying: !prev.isPlaying,
        randomNumber1: id,
        gameResult: 'YOU LOSE',
      }))
    } else if (id === 'SCISSORS' && randomNumber2 === 'PAPER') {
      console.log('Won')
      this.setState(prev => ({
        randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
        score: prev.score + 1,
        isPlaying: !prev.isPlaying,
        randomNumber1: id,
        gameResult: 'YOU WON',
      }))
    } else if (id === 'ROCK' && randomNumber2 === 'SCISSORS') {
      console.log('Won')
      this.setState(prev => ({
        randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
        score: prev.score + 1,
        isPlaying: !prev.isPlaying,
        randomNumber1: id,
        gameResult: 'YOU WON',
      }))
    } else if (id === 'PAPER' && randomNumber2 === 'SCISSORS') {
      console.log('Lose')
      this.setState(prev => ({
        randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
        score: prev.score - 1,
        isPlaying: !prev.isPlaying,
        randomNumber1: id,
        gameResult: 'YOU LOSE',
      }))
    } else {
      console.log('Draw')
      this.setState(prev => ({
        randomNumber2: gameConstants[Math.floor(Math.random() * 3)],
        isPlaying: !prev.isPlaying,
        randomNumber1: id,
        gameResult: 'DRAW',
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState(prev => ({
      isPlaying: !prev.isPlaying,
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
              <p>Score</p>
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
            <ResultDiv>
              <h1>Your Option: {randomNumber1}</h1>
              <h1>Opponent Option: {randomNumber2}</h1>
              <h1>{gameResult}</h1>
              <button type="button" onClick={this.onClickPlayAgain}>
                Play Again
              </button>
            </ResultDiv>
          )}

          <RulesDiv>
            <RulesButton type="button">Rules</RulesButton>
          </RulesDiv>
        </Body>
      </HomeDiv>
    )
  }
}

export default Home
