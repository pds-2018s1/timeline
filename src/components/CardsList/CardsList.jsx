import React from 'react'
import List from 'material-ui/List'
import CardsListItem from '../CardsListItem/CardsListItem'
import Popup from "reactjs-popup";
import './CardsList.css'

class CardsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      year: "",
      group: "",
      img: ""
    }
  }
  componentDidMount() {
    const { fetchCards } = this.props
    fetchCards()
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
    const { cards } = this.props

    return (
      <div>
       <h1>Listado de cartas</h1>
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
        
                
          <button
            className="button"
            onClick={() => {
              this.addCard()
              
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
  } 
}

export default CardsList