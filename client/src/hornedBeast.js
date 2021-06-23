import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Selectbeast  from './selectbeast'

class HornedBeast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vote: props.vote
        }
    }

votinggchange = () => {
    this.setState({ vote: this.state.vote + 1 })
}


render(){


    return (
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imgage}  />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Button onClick={this.votinggchange} variant="primary">click</Button>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>






<Selectbeast

imagesrc={this.props.imgage}
description={this.props.description}
title={this.props.title}



/>


           
            
           
        </div>
    )

}
}
export default HornedBeast;