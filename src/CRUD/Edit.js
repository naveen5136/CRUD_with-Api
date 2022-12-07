import React from 'react'
import { Box, Grid, TextField, Typography,Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@mui/material'


const Edit = () => {
  return (
    <Box>
    <Grid container>
      <Grid item xs={12} md={6}>
      <Typography >Update Students</Typography>
      <Grid container spacing={3} m={2} justifyContent="center">
      <Grid item md={6} >
      <TextField label="ID" value="1" name="id"/>
      <TextField label="name" value="Charvi" name="name"/>
      <TextField label="age" value="4" name="age"/><br/>
      <Button variant='contained'>Update</Button>
      </Grid>
      </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Edit