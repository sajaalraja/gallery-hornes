import React, { Component } from 'react'
import HornedBeast from "./hornedBeast";
import Dataitem from './data.json';



class Main extends Component {
   
   

  

    render() {


console.log(Dataitem)




       
  
        return(
          <div>
            {
         Dataitem.map((item)=>{
          
          
            return  <HornedBeast   
            
             vote={0}
             title={item.title}
             imgage={item.image_url}
            
             description={item.description}
             />
          
         })
        }
        </div>
        
        
        )
    }}

        
    


export default Main;