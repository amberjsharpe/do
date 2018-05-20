import React, { Component } from 'react';
import './App.css';
import Signin from './components/signIn/signIn';
import Cardstack from './components/cardstack';
import NashvilleOpenData from './components/dbInteraction/nashvilleOpenData';
import Hammer from 'hammerjs';
import Geolocated from './components/signIn/geolocated';


var name = "Potters Field";
//test string for querying database
var query = `?$where=park_name="${name}"`

var parksAPI = 
{
  link:`https://data.nashville.gov/resource/xbru-cfzi.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
  type: 'parks'
}

var historyAPI = 
{
  link:`https://data.nashville.gov/resource/xakp-ess3.json?$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
  type: 'history'
};

var artAPI = 
{
  link: `https://data.nashville.gov/resource/xakp-ess3.json$limit=1&$offset=${Math.floor(Math.random()* 100)}`,
  type: 'art'
};


class App extends Component {


  constructor(props){

    super(props)
    this.state={
      pickedAnAPI: false,
      apiNumber: '',
      swiped: false,
    }

    this.logSwipe = this.logSwipe.bind(this);
    this.getAnAPI = this.getAnAPI.bind(this);
    this.swipeAnAPI = this.swipeAnAPI.bind(this);

    this.hammer = new Hammer(document.body, {preventDefault: true});
    this.hammer.on('swipe', this.swipeAnAPI);
  }

  logSwipe(event){
    console.log(event);
  }

  swipeAnAPI(){
    this.setState({pickedAnAPI: false});
    this.getAnAPI();
  }

  getAnAPI(){
    this.setState({
      apiNumber: Math.floor(Math.random() * 3),
      pickedAnAPI: true
    })
  }

  componentDidMount(){
    this.getAnAPI();
  }

  render() {

    if(this.state.pickedAnAPI){
    return (
      <div>
        <Signin />
        {/* <Cardstack /> */}

        {/* <NashvilleOpenData api={this.state.apiNumber} /> */}

        {/* <Geolocated /> */}


      </div>
    )
  }else{
    return(
    <div>
      Loading....
    </div>
    )
  }
}
}

export default App;
