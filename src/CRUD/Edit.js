import React,{useState,useEffect} from 'react'
import { Box, Grid, TextField, Typography,Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@mui/material'
import { useParams } from 'react-router'

const Edit = () => {
    const {id} = useParams()
    const[student,setStudent] = useState({
        name:'',
        age:''
    })

    useEffect(()=>{
       const getStudentData = async()=> {
           const studentResp = await fetch(`http://localhost:3000/student/${id}`)
              const studData = await studentResp.json()
            setStudent(studData)
           console.log(studData)
        }
        getStudentData()
    },[])

  return (
    <Box>
    <Grid container>
      <Grid item xs={12} md={6}>
      <Typography >Update Students</Typography>
      <Grid container spacing={3} m={2} p={3} justifyContent="center">
      
        <Grid item md={6} p={3}>
        <TextField label="ID" value={student.id} name="name" disabled/>
        <TextField label="name" value={student.name} name="name"/>
        <TextField label="age" value={student.age} name="age"/><br/>
        <Button variant='contained'>Update</Button>
        </Grid>
     
      </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Edit