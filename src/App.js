import React, { Component } from 'react';
import './App.css';
import Signin from './components/signIn/signIn';
import NashvilleOpenData from './components/dbInteraction/nashvilleOpenData';
// import CircleButtons from './components/mainParts/btn-circles';


class App extends Component {
  render() {
    return (
      <div>
        <Signin />
      </div>
    );
  }
}

export default App;
