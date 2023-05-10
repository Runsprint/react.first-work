import React, { useEffect } from 'react';
import starImage from './images/icon-star.svg';
import "./app.css";
import "./reset.css";
import Thanks from './components/thanks.jsx';
import { useState } from 'react';

function App() {
  const numbers = [1,2,3,4,5,];

  let [request, setRequest] = useState(true);// conditional rendering when we disappeared whole div and appeared second
  
  let [saveNumber, setSaveNumber] = useState(null); // different from this numbers, any  number

  function foo(number){ // this function is for save number after onclick enent and after we understand which div is clicked.
    setSaveNumber(number);
  }

  return (
    //its fragment and one element and thats why we wrote it and return now that hould return pne element
    <> 
    
    { request 
    
    ?

    <div className='mainBody' >
      <div className='contentDiv' >
        <div className='backDiv2'>
          <img src= {starImage}  alt='starImage'></img>
        </div>

      <p className='title'>How do we do? </p>

      <p className='p'> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!  </p>
      
      <div className='fiveDiv'>

        {numbers.map(number =>{
        
          return (

            <div className={`backDiv ${number === saveNumber ? "active" : null}`} key= {number}  onClick={()=>{foo(number)}}>{number}</div> // {number} we qwrote cuz I needed it is variable and isnt word
          )

        }) }

      </div>

      <button className='button' onClick={() => {

          if(saveNumber !== null){
            setRequest(false)
          }
          }}
    
      >

        SUBMIT

      </button>
  </div> 
</div>
    : //ternary operator 
    
    <Thanks saveNumber={saveNumber} />       //first saveNumber is props name and it doesnt matter waht will be name.
    
    }

    </>
        
  )
}

export default App;
