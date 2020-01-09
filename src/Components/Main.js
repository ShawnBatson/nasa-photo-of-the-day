import React, { useState, useEffect } from "react";
import axios from 'axios';
import PicsCard from './PicsCard';

function PictureList () {
const [pics, setPic] = useState('');

useEffect(() => {
    axios   
        .get('https://api.nasa.gov/planetary/apod?api_key=tnfMthxdDALHltp6Qxlc3Rack8Ok3QZBWQGYkIQm')
        .then(res=> {
            setPic(res.data)    
            console.log(res.data)
        })
        .catch(err => {
            console.log('the picture was not found', err);
        })
}, []);

// if (!props.PictureList) return <h3>Loading...</h3>    

return (
    <div className="mainPic">
        {pics.map(pic => {
            return (
                <PicsCard 
                key={pic.id}
                title={pic.title}
                date={pic.date}
                explanation={pic.explanation}
                hdurl={pic.hdurl}
                url={pic.url}
                />
            )
        })}
        
    </div>
)}

export default PictureList