import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap"

function pictureList () {
const [pics, setPic] = useState([]);

useEffect(() => {
    axios   
        .get('https://api.nasa.gov/planetary/apod?api_key=VFgxUm2CQaExyYQdE3kdndoOn8TL5KhpMaXwk3zo')
        .then(res=> {
            setPic(res.data)
            console.log(res.data)
        })
        .catch(err => {
            console.log('the picture was not found', err);
        })
}, []);

if (!props.photoOfTheDay) return <h3>Loading...</h3>

return (
    <Container classname="mainPic">
        <Row>
        {pics.map(pic => {
            return (
                <PicsCard 
                //prop keys go here
                />
            )
        })}
        </Row>
    </Container>
)}

export default pictureList