import { connect } from 'react-redux'
import Table from '../components/Table/Table'

const playerHand = [ 
    { fact:{name: "Revolución Rusa", year: 1400} },
    { fact:{name: "Revolución Francesa", year: 1400} },
    { fact:{name: "Descubrimiento de America", year: 1400} },
    { fact:{name: "Invencion de la radio", year: 1400} },
    { fact:{name: "Invencion del automovil", year: 1400} },
    { fact:{name: "Invencion del automovil", year: 1400} }
]

const card =  {fact:{name: "Invencion del automovil", year: 1400}}

const time = {playedCards: [card]}

const player1 = {name:"Juan", playerHand:playerHand}
const player2 = {name:"Juan1", playerHand:playerHand}
const player3 = {name:"Juan2", playerHand:playerHand}
const player4 = {name:"Juan3", playerHand:playerHand}
const player5 = {name:"Juan4", playerHand:playerHand}
const player6 = {name:"Juan5", playerHand:playerHand}

const opps = [player1, player2, player3, player4, player5, player6]

const mapStateToProps = state => ({
    player: player1,
    //opponents: state.players,
    opponents: opps,
    //timeline: {playedCards: [state.initialCard]},
    timeline: time,
    deck: 50,
    discard: 0
})

export default connect(mapStateToProps)(Table)