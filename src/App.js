import React, { useEffect } from 'react';
import starImage from './images/icon-star.svg';
import "./app.css";
import "./reset.css";
import Thanks from './components/thanks';

function App() {

  return (
    <div className='mainBody'>
        <div className='contentDiv'>
          <div className='backDiv'>
            <img src= {starImage}  alt='starImage' id='img'></img>
          </div>
          <p className='title' id='title'>How did we do?</p>
          <p className='p' id='p'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className='fiveDiv' id='fiveDiv'>
            <div className='backDiv one' id='one'>1</div>
            <div className='backDiv two'id='two'>2</div>
            <div className='backDiv three' id='three'>3</div>
            <div className='backDiv four' id='four'>4</div>
            <div className='backDiv five' id='five'>5</div>
          </div>
          <button className='button' id='button'>SUBMIT</button>
        </div> 
        <Thanks/>
    </div>
  );
}

export default App;
