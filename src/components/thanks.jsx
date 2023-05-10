import React, { useEffect } from 'react';
import "../app.css";
import "../reset.css";
import thanksImage from '../images/illustration-thank-you.svg';
import { useState } from 'react';




export default function Thanks({saveNumber}){// props is object which is saving any property which I gamovatane {}<its for destructurisation and we dont write props and write this {} and key names should be same 
    
    return(

    <div className='mainBody'>

        <div className='thanksContent'>

          <div className='backDiv'>

                <img src= {thanksImage}  alt='thankImage'></img>

            </div>

                <div className='resultDiv'>

                    <p>You selected {saveNumber} out of 5</p>

                </div>

                <p className='title'>Thank you!</p>
                
                <p className='p2'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
    </div>
    )
}