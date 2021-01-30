
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
import Table from './Table/Table'
import axios from 'axios'


class Home extends Component {
  constructor(){
    super()
    this.state = { 
      course_modules: [],
      course_desc: [],
      section: []
    }
  }

  componentDidMount(){
    axios.get('/episodes.json')
      .then( d => {
        let mod=[]
        
        d.data.episodes.map((datos) => {mod.push(
          {id:datos.id, title:datos.title, description:datos.description, url:datos.url, active:false}
        )})

        
        this.setState({course_modules: mod, course_desc: d.data.course, section: d.data.section})
      })
      .catch( d => {})
  }

  cambioVideo(item, event){
    event.preventDefault()

    let modulos = [...this.state.course_modules]

    modulos.map(d=>{d.active = false})

    item.active = !item.active

    this.setState({modulos})
  }

  render() {
    return(
      <div><Jumbotron title={this.state.course_desc.title} description={this.state.course_desc.description}/>
      <Table cambioVideo={this.cambioVideo.bind(this)} course_modules={this.state.course_modules} section={this.state.section}/></div>
    )
  }
}

export default Home