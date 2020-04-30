import React from 'react';
import  './imagelink.css';


const ImageLinkForm=({onInputChange,onButtonsubmit})=>{

return(


<div>
	
<p className='f3'>
	{'This is magic brain will detect your face, give it a try :)'}
</p>

<div className='center'>
<div className='form'>
<input type = "text" onChange={onInputChange}/>
<button onClick={onButtonsubmit}>Detect</button>
</div>
</div>

</div>












	);}




export default ImageLinkForm;