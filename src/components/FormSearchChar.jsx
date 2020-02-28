import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  }
}))

const statusOpt = [
  {
    value: 'alive',
    label: 'Alive'
  },
  {
    value: 'dead',
    label: 'Dead'
  },
  {
    value: 'unknown',
    label: 'Unknown'
  }
]

const genderOpt = [
  {
    value: 'female',
    label: 'Female'
  },
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'genderless',
    label: 'Genderless'
  },
  {
    value: 'unknown',
    label: 'Unknown'
  }
]

export default function FormPropsTextFields () {
  const classes = useStyles()
  const history = useHistory()
  const [status, setStatus] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [name, setName] = React.useState('')
  const [species, setSpecies] = React.useState('')
  const [type, setType] = React.useState('')
  const handleChange = event => {
    setStatus(event.target.value)
  }
  const handleChangeName = event => {
    setName(event.target.value)
  }
  const handleChangeSpecies = event => {
    setSpecies(event.target.value)
  }
  const handleChangeType = event => {
    setType(event.target.value)
  }
  const handleChangeGender = event => {
    setGender(event.target.value)
  }
  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <h1>Advande search for character</h1>
        <TextField
          id='name'
          name='name'
          label='Name'
          value={name}
          onChange={handleChangeName}
          helperText='The name of the character.'
        />
        <TextField
          id='status'
          select
          label='Select Status'
          value={status}
          onChange={handleChange}
          helperText='Select the character status'
        >
          {statusOpt.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='species'
          name='species'
          value={species}
          onChange={handleChangeSpecies}
          label='Species'
          helperText='The species of the character.'
        />
        <TextField
          id='type'
          name='type'
          value={type}
          onChange={handleChangeType}
          label='Type'
          helperText='The type or subspecies of the character.'
        />
        <TextField
          id='gender'
          name='gender'
          select
          label='Select Geneder'
          value={gender}
          onChange={handleChangeGender}
          helperText='Select the character status'
        >
          {genderOpt.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <Button
          color='primary'
          variant='contained'
          onClick={() => {
            history.push({
              pathname: '/results',
              state: {
                query: {
                  name: name,
                  status: status,
                  species: species,
                  type: type,
                  gender: gender
                }
              }
            })
          }}
        >
          Search
        </Button>
      </div>
    </form>
  )
}
