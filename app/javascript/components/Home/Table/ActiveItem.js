import React from 'react'
import Thumbnail from './Thumbnail'
import Button from '../estilos'


const ActiveItem = (props) => {
    return(
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offser-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8XaFZGlmUgI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="pt-4 pb-4">
                                <h4>{props.title}</h4>
                                <p>{props.description}</p> 
                                <div className="cta-wrapper">
                                    <Button className="btn cta-btn">Ver</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActiveItem
