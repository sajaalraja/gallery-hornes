import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
 
class Selectbeast extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            show: props.show
        }
       
       

    }

    


    render(){
        return (
 <div>


<Modal show={this.props.show} >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <img src={this.props.imgage}/>
        <p>{this.props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button onClick variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>







        </div>
        )
}}


export default Selectbeast;