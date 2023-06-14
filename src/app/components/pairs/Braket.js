'use client'
import React, { useState } from 'react'

export const Bracket = ({ player1, player2 }) => {
  const [selectedParticipant, setSelectedParticipant] = useState(null)

  const handleClickParticipant = participant => {
    setSelectedParticipant(participant)
  }

  return (
    <div className="is-flex is-flex-direction-column" id="bracket">
      <div
        className="button is-success is-outlined my-2"
        onClick={() => handleClickParticipant(1)}
        disabled={selectedParticipant === 2}
      >
        {player1}
      </div>
      <div
        className="button is-danger is-outlined my-2"
        onClick={() => handleClickParticipant(2)}
        disabled={selectedParticipant === 1}
      >
        {player2}
      </div>
    </div>
  )
}
