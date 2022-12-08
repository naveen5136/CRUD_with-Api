import { Card, Grid, TextField, Typography,Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tooltip } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const AddStudent = () => {
    const[getname,setGetname]=useState([])
    const[status,setStatus]=useState()

    const [inputs,setInputs] = useState({
        name:"",
        age:"",
    })
    useEffect(()=>{
        const getnameData = async() =>{
                const getnameresp = await fetch('http://localhost:3000/student')
                const data = await getnameresp.json()
                setGetname(data)
        } 
        getnameData()
    },[])

// ADD Functionality
function handleChange(e){
    setInputs({
        ...inputs,
        [e.target.name]:e.target.value
    })
    console.log(inputs)
    
}

async function handleSubmit(e){
    e.preventDefault()
    try {
        await fetch('http://localhost:3000/student',{
            method:'POST',
            body: JSON.stringify({
                name:inputs.name,
                age:inputs.age
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        })
        console.log(inputs.name,inputs.age)
        setStatus(true)
    } catch (error) {
        console.log("Something is wrong")
    }
}
if(status){
    return <AddStudent/>
}

const handleDelete = async id =>{
  await fetch(`http://localhost:3000/student/${id}`,{
    method:'delete',
  })
  setStatus(true)
}

  return (
    <Box>
    <Grid container>
      <Grid item xs={12} md={6}>
      <Typography >ADD Students</Typography>
      <Grid container spacing={3} m={2} justifyContent="center">
      <Grid item md={6} >
      <form onSubmit={handleSubmit}>
      <TextField label="name" name="name" onChange={(e)=>handleChange(e)}/>
      <TextField label="age" name="age" onChange={(e)=>handleChange(e)}/><br/>
      <Button variant='contained' type='submit'>ADD</Button>
      </form>
      </Grid>
      </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
      <Typography>List Students</Typography>
        <TableContainer>
        <Table>
        <TableHead>
         <TableRow>
          <TableCell> No.
           </TableCell>
            <TableCell> Name
            </TableCell>
             <TableCell> Age
             </TableCell>
              <TableCell> Action
           </TableCell>
         </TableRow>
        </TableHead>
        
        <TableBody>
        {getname.map((item)=>(
            <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.age}</TableCell>
           <TableCell><Link to={`/edit/${item.id}`}><Button variant='contained'>Edit</Button></Link><Button variant='contained' onClick={()=>handleDelete(item.id) }>Delete</Button></TableCell>
          </TableRow>
            ))}
          
        
        </TableBody>
        </Table>
        </TableContainer>
      </Grid>
    
    </Grid>
    </Box>
  )
}

export default AddStudent