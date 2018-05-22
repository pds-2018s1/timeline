import React from 'react'
import List from 'material-ui/List'
import CardsListItem from '../CardsListItem/CardsListItem'
import Popup from "reactjs-popup";
import './CardsList.css'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'



class CardsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      year: "",
      group: "",
      img: "",
      filtered: false,
      _cards: this.getInitialState
    }
  }

  componentDidMount() {
    const { fetchCards } = this.props
    fetchCards()
    const {cards} = this.props
    this.setState({_cards:cards, filtered: false})
  }
  
  getInitialState (){
    const { fetchCards } = this.props
    fetchCards()
    const {cards} = this.props
    console.log(cards)
    return cards
  }
 
  

  handleNameChange = (event) =>
    this.setState({name: event.target.value})
  
  handleYearChange = (event) =>
    this.setState({year: event.target.value})
  
  handleImgChange = (event) =>
    this.setState({img: event.target.value})
  
  
  handleGroupChange = (event) =>
    this.setState({group: event.target.value})


  render() {
    let  {cards} = this.props
    if (this.state.filtered){
      cards = this.state._cards
    }
  
    return (
      <div>
       <h1>Listado de cartas</h1>
       <input type="text" placeholder="Search" onChange={this.filterList}/>
        <List>
          {cards.map(card => (
              <CardsListItem key={card._id} card={card} />
          ))}
        </List>
        <Popup trigger={<button className="button"> Agregar una carta </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Agregar una carta </div>
        <div className="content">
          {" "}
          Aquí se agregan las cartas
        </div>
        <div className="actions">
        <input type="text" name="name" placeholder="Ingrese el hecho" onChange={this.handleNameChange} />
        <input type="number" name="year" placeholder="Ingrese el año" onChange={this.handleYearChange}/>
        <input type="text" name="img" placeholder="Ingrese un link a la imagen del año" onChange={this.handleImgChange}/>
        <input type="text" name="group" placeholder="Ingrese el grupo al que pertenece esta carta" onChange={this.handleGroupChange}/>
        
                
          <button className="button" onClick={() => {this.addCard()   
              close()
            }}
          >
            Agregar Carta
          </button>
      </div>
      </div>
    )}
  </Popup>  
      </div>
    )
  }
  addCard = () => {
    const { addCardAction } = this.props
    addCardAction(this.state.name, this.state.year, this.state.img, this.state.group)
    this.setState({ name: '', year: '', img: '', group: '' })
    const { cards } = this.props
    this.setState({_cards:cards, filtered: false})
  } 

  /*
  deleteCard = (id) => {
    const {deleteCardAction} = this.props
    deleteCardAction(id)
    const { cards } = this.props
    this.setState({_cards:cards})
  }*/


  filterList = (event) => {
    const _group = event.target.value
    const { cards } = this.props
    
    const filteredCards = cards.filter(function (n){
      return n.group.match(_group)
      
    })
    this.setState({filtered: true,_cards: filteredCards})
  }  
}

export default CardsList