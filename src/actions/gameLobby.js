/*TODO: agregar JSON con 220 cartas*/

export const START_GAME = 'START_GAME'
export const startGame = (playerName) => ({
  type: START_GAME,
  player : {name:playerName, playerHand:[{fact:"something", year:"a year"}]},
})