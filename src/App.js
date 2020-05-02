import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/Imagelink/imagelink';
import FaceRecognition from './components/FaceRecognition/Facerecognition';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import './App.css';


const particlesoptions={

  particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }







}


const app = new Clarifai.App({
 apiKey: 'd38db76718d84174a4098093737a311f'
});









class App extends Component {

constructor(){

super ();
this.state={

input:'',
imageurl:'',
box:'', 
route:'Signin'

}



}


onInputChange=(event)=>{

this.setState({input:event.target.value});

}



 Calculateface=(data)=>{
console.log('Hanji');
const facelocation=data.outputs[0].data.regions[0].region_info.bounding_box ;
console.log(facelocation);
const imagedimensions=document.getElementById('Imageid');
const width=Number(imagedimensions.width);
const height =Number(imagedimensions.height);
console.log(width);
console.log(height);
return{

left_col:facelocation.left_col *width,
top_row:facelocation.top_row*height,
right_col:width-(facelocation.right_col*width),
bottom_row:height-(facelocation.bottom_row*height)

}}


 displayface=(box)=>{
console.log(box);
this.setState({box:box})


}


onRoute =(route)=>{


this.setState({route});

}

onButtonsubmit=()=>{

this.setState({imageurl:this.state.input});

app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
    response=>{
    this.displayface(this.Calculateface(response));
    } ).catch(
  err=>{
     console.log(err);
    }
  


);






}




  render (){
  return (
    <div className="App">
     <Particles className='particles'
  params={particlesoptions}
     />

     <Navigation  onRoute={this.onRoute} />
       {this.state.route==='home'?
      <div>
      
   <Logo/>
   <Rank/>
<ImageLinkForm onInputChange={this.onInputChange} onButtonsubmit={this.onButtonsubmit} />
 <FaceRecognition box ={this.state.box} imageurl={this.state.imageurl}/>
</div>
:(
 this.state.route==='Signin'?
 <Signin onRoute={this.onRoute}/>
       :<Register onRoute={this.onRoute}/>
)

}
   








    </div>
  );
}
}

export default App;
