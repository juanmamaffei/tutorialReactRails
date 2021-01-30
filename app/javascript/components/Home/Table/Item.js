import React from 'react'
import Thumbnail from './Thumbnail'
import styled from 'styled-components'

const Button = styled.a`
    display: inline-block;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    background: #fff;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 0px;
    box-shadow: 0 0 0 1px #bbb,
        -2px 3px #aaa,
        -3px 3px 0 3px #ccc;
`
const Item = (props) => {
    return(
        <div className="row pt-4 pb-4">
            <div className="col-md-10 offser-md-1">
                <div>
                    <div className="card px-5">
                        <div className="row">
                            <div className="col-md-4">
                                <Thumbnail/>
                            </div>
                            <div className="col-md-8">
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
        </div>
    )
}

export default Item
