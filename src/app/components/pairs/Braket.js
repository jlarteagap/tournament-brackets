'use client'
import React, { useState } from 'react'

export const Bracket = ({ player1, player2, onWinnerSelected }) => {
  const [winner, setWinner] = useState(null)

  const handleWinnerSelect = selectedPlayer => {
    setWinner(selectedPlayer)
    onWinnerSelected(selectedPlayer)
  }

  return (
    <div className="is-flex is-flex-direction-column" id="bracket">
      <div
        className={`button is-success is-outlined my-2 ${
          winner === player1 ? 'is-active' : ''
        }`}
        onClick={() => handleWinnerSelect(player1)}
        disabled={winner !== null}
      >
        {player1}
      </div>
      <div
        className={`button is-danger is-outlined my-2 ${
          winner === player2 ? 'is-active' : ''
        }`}
        onClick={() => handleWinnerSelect(player2)}
        disabled={winner !== null}
      >
        {player2}
      </div>
    </div>
  )
}
