import React from 'react'
import { Bracket } from './Braket'
const players = [
  'Participant 1',
  'Participant 2',
  'Participant 3',
  'Participant 4',
  'Participant 5',
  'Participant 6',
  'Participant 7',
  'Participant 8'
]

export const OrderBrackets = () => {
  const brackets = []
  for (let i = 0; i < players.length; i += 2) {
    const player1 = players[i]
    const player2 = players[i + 1]
    brackets.push({ player1, player2 })
  }

  return (
    <>
      {brackets.map((bracket, index) => (
        <Bracket
          key={index}
          player1={bracket.player1}
          player2={bracket.player2}
        />
      ))}
    </>
  )
}

// export const OrderPairs = () => {
//   return (
//     <>
//       {participants.map((participant, i) => {
//         return (
//           <div

//             key={i}
//             style={{
//               borderColor: 'white',
//               padding: '1rem',
//               borderStyle: 'solid',
//               borderBlockWidth: '1px'
//             }}
//           >
//             {participant}
//           </div>
//         )
//       })}
//     </>
//   )
// }
