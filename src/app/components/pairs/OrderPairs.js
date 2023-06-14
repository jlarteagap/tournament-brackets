import React from 'react'
const participants = [
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

export const OrderPairs = () => {
  return (
    <>
      {participants.map((participant, i) => {
        return (
          <div
            className={`${i} ${i / 2 === 0 && 'doble'}`}
            key={i}
            style={{
              borderColor: 'white',
              padding: '1rem',
              borderStyle: 'solid',
              borderBlockWidth: '1px'
            }}
          >
            {participant}
          </div>
        )
      })}
    </>
  )
}
