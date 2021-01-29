
/* 
Jumbotron
Tableofcontents/List 
    Items
      Preview/Thumbnail
    ActiveItem
      Video

*/


import React, { Component } from 'react';
import Jumbotron from './Jumbotron'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      course_modules: [
        { id:1, title: '1. Video 1', description: 'desc1 ', active: false},
        { id:2, title: '2. Video 2', description: 'desc2', active: false},
        { id:3, title: '3. Video 3', description: 'desc3 ', active: false},
        { id:4, title: '4. Video 4', description: 'desc4 ', active: false}
      ]
    }
  }
  render() {
    return(
      <div><Jumbotron/></div>
    )
  }
}

export default Home