import React from 'react' ;
import 'tachyons';
import './logo.css';
import brain from './brain.png'
import Tilt from 'react-tilt';

const Logo=()=>{

return (


<div className='ma4 mt0'>
	<Tilt className="Tilt  br2 shadow-2" options={{ max : 125 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner"> <img alt='logo' src ={brain}/> </div>
</Tilt>
</div>



	);






}


export default Logo;