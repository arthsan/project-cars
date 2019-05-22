import React from 'react';
import './carpage.css'
import Review from '../reviews/Review'

const CarPage = (props) => {
  console.log(props.location.state)
  return (
    <div>
      <div className="box-car">
        <div className="box-img">
          <img className="img-car" src={props.location.state.imageUrl}  alt="carphoto" />
        </div>
        <div>
          <h3>{props.location.state.model}</h3>
          <h4>Review Project Cars</h4>
          <h4>Review Owners</h4>
          <div className='itens-car'>
            <div >
              <ul>
                <li>abs: {props.location.state.abs ? "yes" : "no"}</li>
                <li>parkSensor: </li>
                <li>airBag: </li>
                <li>fogLights:</li>
                <li>backupCam: </li>
                <li>alarm: </li>
                <li>airCondit: </li>
                <li>heightSeat: </li>
                <li>autoPilot: </li>
                <li>leatherSeat: </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>sunRoof: </li>
                <li>steeringWheelAdjust:</li> 
                <li>alloyWheel: </li>
                <li>headlightSensor: </li>
                <li>radio: </li>
                <li>usb: </li>
                <li>gps: </li>
                <li>boardPc: </li>
                <li>steeringMultiFunction: </li>
                <li>bluetooth: </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="description-car">
        <h5>{props.location.state.model}</h5>
        <p>{props.location.state.text}</p>
      </div>
      <h5>Reviews</h5>
      <Review />
      
    </div>           
  )    
}

export default CarPage;