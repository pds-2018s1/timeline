import React from 'react'

class CardsManagement extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return(<div className="home">
    <div className="greet">En esta sección se podrán administrar las cartas y grupos de este juego</div>
    
    <button type="submit" name="submit" 
             onClick={() => this.props.administrate()}>
            Administrar</button>
    
  </div>)
  }
  
}

export default CardsManagement