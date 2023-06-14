'use client'
import React, { useState } from 'react'
import { Bracket } from './Braket'

const players = [
  'Participant 1',
  'Participant 2',
  'Participant 3',
  'Participant 4',
  'Participant 5',
  'Participant 6',
  'Participant 7',
  'Participant 8',
  'Participant 9',
  'Participant 10',
  'Participant 11',
  'Participant 12',
  'Participant 13',
  'Participant 14',
  'Participant 15',
  'Participant 16'
]

export const OrderBrackets = () => {
  const [winners, setWinners] = useState([...players])

  const handleWinnerSelected = winner => {
    setWinners(prevWinners => [...prevWinners, winner])
  }

  const renderBracketRounds = players => {
    const numParticipants = players.length
    const bracketRounds = []
    let currentRoundPlayers = players

    while (currentRoundPlayers.length > 1) {
      const roundBrackets = []
      const halfLength = Math.ceil(currentRoundPlayers.length / 2)

      for (let i = 0; i < halfLength; i++) {
        const player1 = currentRoundPlayers[i * 2] || ''
        const player2 = currentRoundPlayers[i * 2 + 1] || ''

        roundBrackets.push(
          <Bracket
            key={i}
            player1={player1}
            player2={player2}
            onWinnerSelected={handleWinnerSelected}
          />
        )
      }

      bracketRounds.push(roundBrackets)
      currentRoundPlayers = roundBrackets.map(bracket => bracket.props.winner)
    }

    return bracketRounds
  }

  const renderBrackets = () => {
    const bracketRounds = renderBracketRounds(winners)
    const numRounds = Math.ceil(Math.log2(players.length))

    return bracketRounds.map((round, index) => (
      <div key={index} className="bracket-round">
        <h2>{getTitleByRound(index + 1, numRounds)}</h2>
        {round}
      </div>
    ))
  }

  const getTitleByRound = (round, numRounds) => {
    if (round === numRounds) {
      return 'Final'
    } else if (round === numRounds - 1) {
      return 'Semifinal'
    } else {
      return `Round ${round}`
    }
  }

  return <div className="bracket-container">{renderBrackets()}</div>
}
