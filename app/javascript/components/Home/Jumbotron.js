import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background-color: #d74234;
    min-height: 500px;
    padding:100px 0;
    color: #fff;
`

const H1 = styled.h1`
    font-weight: 700;
    font-size: 40px;
    line-height: 52px; 
`

const Subhead = styled.p`
    font-weight: 500;
    font-size: 20px;
`

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

const Jumbotron = () => {
    return(
        <Section className="home-section--1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <H1>Tutorial en videos</H1>
                            <Subhead>Disfrutá de tus videotutoriales ordenados blah.</Subhead>
                            <div className="cta-wrapper">
                                <Button className="btn fancy-btn">Comenzar</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                        <iframe width="460" height="315" src="https://www.youtube.com/embed/8XaFZGlmUgI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Jumbotron