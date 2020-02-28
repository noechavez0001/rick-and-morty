import React from 'react'
import SearchBar from '../../components/SearchBar'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import temp1 from '../../images/temp1.jpg'
import temp2 from '../../images/temp2.jpg'
import temp3 from '../../images/temp3.jpg'

function Page (props) {
  const { currentItem } = props
  if (currentItem.episode) {
    // Asign image to episode
    let image = temp1
    if (currentItem.episode.includes('S02')) {
      image = temp2
    } else if (currentItem.episode.includes('S03')) {
      image = temp3
    }
    return (
      <div>
        <SearchBar />
        <Grid container spacing={4} style={{ padding: 24 }}>
          {currentItem ?
            <div>
              <h1>{currentItem.name}</h1>
              <hr />
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <img src={image} alt='250px' />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align='center'>Prop</TableCell>
                        <TableCell align='center'>Episode Data</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align='center'>
                          Name
                        </TableCell>
                        <TableCell align='center'>
                          {currentItem.name}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='center'>
                          Air Date
                        </TableCell>
                        <TableCell align='center'>
                          {currentItem.air_date}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='center'>
                          Episode Code
                        </TableCell>
                        <TableCell align='center'>
                          {currentItem.episode}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align='center'>
                          Characters
                        </TableCell>
                        <TableCell align='center'>
                          {JSON.stringify(currentItem.characters)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </div>
            : <h1>Loading...</h1>}
        </Grid>
      </div>
    )
  } else {
    return (
      <div>
        <SearchBar />
        <h1>Network error</h1>
      </div>
    )
  }
}

export default Page
