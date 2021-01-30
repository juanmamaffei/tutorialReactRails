
import React, { Component } from 'react'
import Item from './Item'
import ActiveItem from './ActiveItem'

class Table extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const items = this.props.course_modules.map ( (data)=>{
            let cambioVideo = this.props.cambioVideo.bind(this,data)
            
            return (
                data.active ?
                    <ActiveItem cambioVideo={cambioVideo} key={data.id} title={data.title} description={data.description} url={data.url.replace("watch?v=", "embed/")} />
                :
                    <Item cambioVideo={cambioVideo} key={data.id} title={data.title} description={data.description} url={data.url.replace("watch?v=", "embed/")} />
            )

        })

        return(
            <div className="pt-5 pb-5">
                <div className="container">
                    <div className="text-center">
                        <h2 className="pt-4 pb-4">{this.props.section.title}</h2>
                        <h4>{this.props.section.description}</h4>
                    </div>
                    {items}
                </div>
            </div>
        )
    }
}


export default Table