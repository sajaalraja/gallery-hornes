import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';

class Header extends Component {

filterr=()=>{

}


    render() {
        
        return (
            <div>
                <h1>horns gallery</h1>
                <Form style={{width:300, height:100, fontsize:30}}>
          
          
                <Form.Label>filtiring</Form.Label>
          <Form.Control onChange={this.filterr} as="select">
            <option>select the number filter</option>
            <option value="1">1</option>
            <option value="2">2</option>
          
          </Form.Control>
        </Form>
   


             
            </div>
        )
    }
}

export default Header;