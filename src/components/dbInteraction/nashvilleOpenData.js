import React, { Component } from 'react';
import CardStack from '../cardstack'; 




class NashvilleOpenData extends Component {

  constructor(props){
    super(props)
    this.state = {
      data: [],
      dataLoaded: false,
      dataType: []
    }
}

// function that takes API url and dataType 
  getThatAPI(url, type,name){
    console.log("getThatAPI url", url+name);
    console.log("getThatAPI type", type);
    fetch(url)
    .then(data => data.json())
    .then((data) => {
      console.log(data);
      this.setState({data: data, dataLoaded: true, dataType: type});
    })
  }

  componentDidMount(){
    this.getThatAPI(this.props.url, this.props.dataType,this.props.name);
  }
  
  render() {

  //print parks
  if(this.state.dataLoaded && this.state.dataType === 'parks'){
  var dataStuff = this.state.data;
  console.log("this.state.dataType in render" ,this.state.dataType);
      return (<CardStack name={dataStuff[0].park_name} type={this.state.dataType} />)

  //print art
  }else if(this.state.dataLoaded && this.state.dataType === 'art'){
    var dataStuff = this.state.data;
    console.log("this.state.dataType in render" ,this.state.dataType);
        return (<CardStack name={dataStuff[0].title} type={this.state.dataType} />)

  //print history
  }else if(this.state.dataLoaded && this.state.dataType === 'history'){
    var dataStuff = this.state.data;
    console.log("this.state.dataType in render" ,this.state.dataType);
        return (<CardStack name={dataStuff[0].title} type={this.state.dataType} />)
  }else if (!this.state.dataLoaded){
    return(
    <div>
      Loading....
    </div>
    )
  }
}
}

export default NashvilleOpenData;