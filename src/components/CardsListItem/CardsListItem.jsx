import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

import { deleteCard } from '../../actions/game'

function CardsListItem({ card, deleteCard}) {
  return (
    <ListItem dense>
      <ListItemText primary={card.name+", "+card.year} secondary={card.group} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete">
          <DeleteIcon onClick={() => deleteCard(card._id)} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default connect(undefined, 
  ({
    deleteCard
  })
)(CardsListItem)