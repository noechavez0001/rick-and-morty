import React from 'react'
import SearchBar from '../../components/SearchBar'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

function Page (props) {
  const { currentItem } = props
  return (
    <div>
      <SearchBar />
      <Grid container spacing={4} style={{ padding: 24 }}>
        {currentItem ?
          <div>
            <h1>{currentItem.name}</h1>
            <hr />
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img src={currentItem.image} alt='250px' />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center'>Prop</TableCell>
                      <TableCell align='center'>Character Data</TableCell>
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
                        Status
                      </TableCell>
                      <TableCell align='center'>
                        {currentItem.status}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'>
                        Species
                      </TableCell>
                      <TableCell align='center'>
                        {currentItem.species}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'>
                        Type
                      </TableCell>
                      <TableCell align='center'>
                        {currentItem.type}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'>
                        Gender
                      </TableCell>
                      <TableCell align='center'>
                        {currentItem.gender}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'>
                        Origin
                      </TableCell>
                      <TableCell align='center'>
                        {JSON.stringify(currentItem.origin)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'>
                        Location
                      </TableCell>
                      <TableCell align='center'>
                        {JSON.stringify(currentItem.location)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='center'>
                        Episodes
                      </TableCell>
                      <TableCell align='center'>
                        {JSON.stringify(currentItem.episode)}
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
}

export default Page
