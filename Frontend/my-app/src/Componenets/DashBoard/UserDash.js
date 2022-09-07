// import {faArrowCircleLeft,faArrowCircleRight} from "@fortawesome/free-solid-svg-icons"
// import {FontAwesomeIcon, fontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import './UserSlider.css'
import React, { useState } from "react"

function Slider(){
// const[slideIndex,setSlideIndex]=useState(0);
//     const handleClick=(direction)=>{

//     }
 
    return(
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://www.nawy.com/blog/wp-content/uploads/2022/06/Home-Decor.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://miro.medium.com/max/513/1*gzXkGEyIzjNfxBLPza2ARg.jpeg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=640:*" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

        </div>
        
    )
    }
    

export default Slider
{/* <div className="s-container">
            <div className="s-arrow left">
            <FontAwesomeIcon icon={faArrowCircleLeft}/>
            </div>
            <div className="wrapper">
                <div className="slide">
                    <div className="img-container">
                    <img className="s-img" src="https://www.nawy.com/blog/wp-content/uploads/2022/06/Home-Decor.jpg" alt=""></img>
                    </div>
                </div>
                <div className="slide">
                    <div className="img-container">
                    <img className="s-img" src="https://miro.medium.com/max/513/1*gzXkGEyIzjNfxBLPza2ARg.jpeg" alt=""></img>
                    </div>
                </div>
                <div className="slide">
                    <div className="img-container">
                    <img className="s-img" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=640:*" alt=""></img>
                    </div>
                </div>
            </div>
            <div className="s-arrow right" onClick={()=>handleClick("right")}>
            <FontAwesomeIcon icon={faArrowCircleRight}/>
            </div>
        </div> */}
