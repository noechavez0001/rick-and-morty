import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import temp1 from '../images/temp1.jpg'
import temp2 from '../images/temp2.jpg'
import temp3 from '../images/temp3.jpg'

const useStyles = makeStyles({
  media: {
    height: 250
  }
})

export default function Element (props) {
  const { title, description, type, id } = props
  let image = temp1
  if (title) {
    if (title.includes('S02')) {
      image = temp2
    } else if (title.includes('S03')) {
      image = temp3
    }
  }
  if (props.image) {
    image = props.image
  }
  const urlDetails = '/' + type.toLowerCase() + '/' + id
  const classes = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={type + ': ' + title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
        Share
        </Button>
        <Link to={{ pathname: urlDetails, state: { character: props.other } }}>
          <Button size='small' color='primary'>
          Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}
