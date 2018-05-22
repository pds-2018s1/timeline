import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import FaIconPack from 'react-icons/lib/fa'


import { deleteCard } from '../../actions/game'


class CardsListItem extends React.Component {
  
  _handleDelete(id){
    this.props._handleDelete(id);
  }
  render() {
    const {card } = this.props
  return (
    <ListItem dense>
      <ListItemText primary={card.name+", "+card.year} secondary={card.group} />
      <ListItemSecondaryAction>
       
        
        <IconButton aria-label="Delete">
          <DeleteIcon onClick={this._handleDelete.bind(this, card._id)} />


        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}
}

export default connect(undefined, 
  ({
    deleteCard
  })
)(CardsListItem)
/* <IconButton aria-label="FaStopCircle"  onClick={this._handleDelete.bind(this, card._id)}>*/