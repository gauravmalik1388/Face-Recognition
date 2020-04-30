import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/logo';
import ImageLinkForm from './components/Imagelink/imagelink';
import FaceRecognition from './components/FaceRecognition/Facerecognition';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
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
imageurl:''

}



}


onInputChange=(event)=>{

this.setState({input:event.target.value});

}

onButtonsubmit=()=>{

this.setState({imageurl:this.state.input});

app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input).then(
    function(response) {
     console.log(response);
    },
    function(err) {
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
     <Navigation/>
   <Logo/>
   <Rank/>
<ImageLinkForm onInputChange={this.onInputChange} onButtonsubmit={this.onButtonsubmit} />
 

 <FaceRecognition imageurl={this.state.imageurl}/>

   
    </div>
  );
}
}

export default App;
