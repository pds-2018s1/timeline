/* eslint no-console: 0 */
import React from 'react'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import EditableLabel from 'react-inline-editing';


class CardsListItem extends React.Component {
  constructor(props){
    super(props);
    this._handleFocusName = this._handleFocusName.bind(this);
    this._handleFocusOutName = this._handleFocusOutName.bind(this);

    this._handleFocusYear = this._handleFocusYear.bind(this);
    this._handleFocusOutYear = this._handleFocusOutYear.bind(this);
    
    this._handleFocusGroup = this._handleFocusGroup.bind(this);
    this._handleFocusOutGroup = this._handleFocusOutGroup.bind(this);

    this._handleFocusImage = this._handleFocusImage.bind(this);
    this._handleFocusOutImage = this._handleFocusOutImage.bind(this);

  }
  
  _handleFocusName(text) {
    console.log('Focused with text: ' + text);
}

_handleFocusOutName(text) {
    const {editCard} = this.props
    const {card } = this.props
    editCard(card._id, text, card.year, card.image, card.group)
    this.props._handleEdit();
    console.log('Left editor with text: ' + text);
}

_handleFocusYear(text) {
  console.log('Focused with text: ' + text);
}

_handleFocusOutYear(text) {
  const {editCard} = this.props
  const {card } = this.props
  editCard(card._id, card.name, text, card.image, card.group)
  this.props._handleEdit();
  console.log('Left editor with text: ' + text);
}

_handleFocusImage(text) {
  console.log('Focused with text: ' + text);
}

_handleFocusOutImage(text) {
  const {editCard} = this.props
  const {card } = this.props
  editCard(card._id, card.name, card.year, text, card.group)
  this.props._handleEdit();
  console.log('Left editor with text: ' + text);
}

_handleFocusGroup(text) {
  console.log('Focused with text: ' + text);
}

_handleFocusOutGroup(text) {
  const {editCard} = this.props
  const {card } = this.props
  editCard(card._id, card.name, card.year, card.image, text)
  this.props._handleEdit();
}

  _handleDelete(id){
    this.props._handleDelete(id);
  } 
  render() {
    const {card } = this.props
  return (
    <ListItem dense>
     <ListItemText 
     primary={<tr><EditableLabel text={card.name+"   "}
                  onFocus={this._handleFocusName}
                  onFocusOut={this._handleFocusOutName} id="cardName"/>
            
                  <EditableLabel text={card.year.toString() }
                  onFocus={this._handleFocusYear}
                  onFocusOut={this._handleFocusOutYear} id="cardYear"/></tr>} 
        
     secondary={<tr><EditableLabel text={card.group}
                    onFocus={this._handleFocusGroup}
                    onFocusOut={this._handleFocusOutGroup} id="cardGroup"/>

                    <EditableLabel text={card.image}
                    onFocus={this._handleFocusImage}
                    onFocusOut={this._handleFocusOutImage}/></tr>}  />
    
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" id="deleteCard">
          <DeleteIcon onClick={this._handleDelete.bind(this, card._id)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
}


export default CardsListItem

