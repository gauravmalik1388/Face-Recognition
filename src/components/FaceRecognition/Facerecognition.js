import React from 'react';
import './facerecoginition.css';



const facerecognition=({imageurl,box})=>{




return (

<div className='center ma'>

<div className='absolute mt2 mt2'  >

<img id="Imageid"src={imageurl} width='500px' height ='auto'/>

<div className='bounding-box' style={{top:box.top_row,right:box.right_col,bottom:box.bottom_row,left:box.left_col}}>

</div>


</div>
</div>


	);


}



export default facerecognition;
