import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './components/Header/Header'
import Lesson from "./components/Lesson/Lesson"


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Header/>
        <Lesson/>
      </MuiThemeProvider>
    );
  }
}

export default App;
