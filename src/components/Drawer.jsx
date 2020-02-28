import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import SearchIcon from '@material-ui/icons/Search'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

export default function TemporaryDrawer () {
  const classes = useStyles()
  const history = useHistory()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const sideList = side => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem
          button
          key={1}
          onClick={() => {
            history.push({
              pathname: '/search'
            })
          }}
        >
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary='Advance Search' />
        </ListItem>
        <ListItem
          button
          key={2}
          onClick={() => {
            history.push({
              pathname: '/'
            })
          }}
        >
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='open drawer'
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  )
}
