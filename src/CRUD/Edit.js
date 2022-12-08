import React,{useState,useEffect} from 'react'
import { Box, Grid, TextField, Typography,Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@mui/material'
import { useParams } from 'react-router'
import {useNavigate} from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()
    const history = useNavigate()

    const[inputs,setInputs]=useState({
      name:'',
      age:''
    })

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

    function handleGoTo(){
       history(-1)
    }

    function handleEditChange(e){
       setStudent({
        ...student,
        [e.target.name]: e.target.value
       })
       console.log("inputs",student)
    }
   async function handleSubmit(e){
    e.preventDefault()
      await fetch(`http://localhost:3000/student/${id}`,{
        method:'PUT',
        body:JSON.stringify({
          name:student.name,
          age:student.age
        }),
        headers:{
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
      console.log("handle",student.name)
    }

  return (
    <Box>
    <Grid container>
      <Grid item xs={12} md={6}>
      <Typography >Update Students</Typography>
      <Grid container spacing={3} m={2} p={3} justifyContent="center">
      
        <Grid item md={6} p={3}>
        <form onSubmit={handleSubmit}>
        <TextField label="ID" value={student.id} name="name" disabled/>
        <TextField label="name" value={student.name} name="name" onChange={(e)=>handleEditChange(e)}/>
        <TextField label="age" value={student.age} name="age" onChange={(e)=>handleEditChange(e)}/> <br/>
        <Button variant='contained' type="submit">Update</Button>
        <Button onClick={handleGoTo}>GO BACK </Button>
        </form>
        </Grid>
     
      </Grid>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Edit