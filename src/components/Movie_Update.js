import {  Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@material-ui/core'
import axios from 'axios'
import { useState } from 'react'
import React from 'react'
import useForm from './Read'
const Movie_Update = () => {
    var [value,setvalue]=useState([])
    const disp=()=>{
        axios.get(`"http://localhost:8080/update"`).then((response)=>{
            console.log(response.data)
            setvalue(
                value=response.data
                
            )
        }
    )
    
    }


    return (
        <div>
            <TextField value={value.moviename} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="movie" name="moviename" />
            <TextField value={value.actor} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="actor" name="actor"/>
            <TextField value={value.director} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="director" name="director"/>
            <TextField value={value.review} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="review" name="review"/>
            
            <Button onClick={disp}fullWidth variant="contained" color="primary">UPDATE</Button>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell> {moviename}</TableCell>
                            <TableCell> {actor}</TableCell>
                            <TableCell> {director}</TableCell>
                            <TableCell> {review}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {value.map((value,index)=>{
                        return <TableRow>
                            <TableCell> {value.moviename}</TableCell>
                            <TableCell> {value.actor}</TableCell>
                            <TableCell> {value.director}</TableCell>
                            <TableCell> {value.review}</TableCell>
                            </TableRow>
                    })
                }
                </TableBody>
            </Table>

                
        </div>
    )
            
     }   
              
export default Movie_Update
