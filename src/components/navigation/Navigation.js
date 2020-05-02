import React from 'react' ;
import 'tachyons';


const Navigation=({onRoute})=>{

return (

<nav  style={{display:'flex',justifyContent:'flex-end'}}>


<p

onClick={()=>onRoute('Signin')}
 className='f3 link dim black underline pa3 pointer'>Sign out</p>
}


</nav>



	);






}


export default Navigation;