import { Button, TextField,Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './Read'

const Movie_Add = () => {

    var [value,setvalue] = useForm({moviename:"",actor:"",director:"",review:""})
    const readvalues=()=>{
        console.log(value)
        axios.post("http://localhost:8080/add",value).then(
            (response)=>{
            alert( "Movie Added Successfully ")
            }
        )
    }
    
    return (
        <div>
        <Typography variant="h3" color="primary" style={{fontFamily:"sans-serif",padding:12}} >INSERT MOVIE</Typography>

            <TextField value={value.moviename} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="movie" name="moviename" />
            <TextField value={value.actor} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="actor" name="actor"/>
            <TextField value={value.director} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="director" name="director"/>
            <TextField value={value.review} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="review" name="review"/>
            
            
            

             <Button onClick={readvalues} fullWidth variant="contained" color="primary">SUBMIT</Button>

        </div>
    )
}

export default Movie_Add
