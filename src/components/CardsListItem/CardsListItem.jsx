import React from 'react'
import { connect } from 'react-redux'
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'

//import { removeItem } from '../../actions/game'

function CardsListItem({ item, removeItem}) {
  return (
    <ListItem dense>
      <ListItemText primary={item.name} secondary={item.year} />
    </ListItem>
  )
}

export default connect(undefined, 
  ({
 //   removeItem
  })
)(CardsListItem)