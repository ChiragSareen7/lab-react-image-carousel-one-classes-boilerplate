import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  
    constructor(){
        super()
        this.state = {
            data: 0,
          };
    }
    
   left=()=>{
    this.setState((last)=>({
      data:(last.data-1+images.length)%images.length,
    }))
   }

   right=()=>{
    this.setState((last)=>({
      data:(last.data+1)%images.length,
    }))
   }

    render(){

      const{data}=this.state;
        return(
            <div>
            <div className="left" onClick={this.left}><ArrowBackIosIcon /></div>
            <div className="photo" style={{ backgroundImage: `url(${images[this.state.data].img})` }}>
              
              <div className="text">
                <h1>{images[data].title}</h1>
                <h1>{images[data].subtitle}</h1>
              </div>
             
            </div>
            <div className="right" onClick={this.right}><ArrowForwardIosIcon /></div>
          </div>
        )
    }
    
}



export default Carousel;