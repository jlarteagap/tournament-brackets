'use client'
import React, { useState } from 'react'

export const Bracket = () => {
  const [selectedParticipant, setSelectedParticipant] = useState(0)

  const handleClickParticipant = participant => {
    setSelectedParticipant(participant)
  }

  return (
    <div className="is-flex is-flex-direction-column" id="bracket">
      <div
        className="button is-success is-outlined my-2"
        onClick={() => handleClickParticipant(1)}
        disabled={selectedParticipant > 1}
      >
        Participant 1
      </div>
      <div
        className="button is-warning is-outlined my-2"
        onClick={() => handleClickParticipant(2)}
        disabled={selectedParticipant === 1}
      >
        Participant 2
      </div>
    </div>
  )
}
