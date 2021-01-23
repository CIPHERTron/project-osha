import React from 'react'
import {useHistory} from 'react-router-dom'

import {Container, Button} from '@material-ui/core'

import './Landing.css'

import doctor from '../../assets/doctor.png'
import patient from '../../assets/patient.png'

export default function Landing() {
  let history = useHistory();

  function handleClick() {
    history.push("/patient-login");
  }

  function doctorLogin() {
    history.push("/doctor-login");
  }
  return(
    <div className="landing-root" style={{overflowY: 'hidden'}}>
    <div className="header">
      <h1 style={{fontSize: '4rem'}}>WELCOME TO <span>OSHA</span></h1>
      <h3>(ONE STOP HEALTHCARE APP)</h3>
    </div>

      <div className="main">
      <Container>
      {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="426" height="404" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://fmovies2.org"></a><br><style>.mapouter{position:relative;text-align:right;height:404px;width:426px;}</style><a href="https://google-map-generator.com">map embed code</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:404px;width:426px;}</style></div></div> */}
      <div style={{overflowY: 'hidden'}} className="map-root">
      {/* <h1>Find all nearby hospitals</h1> */}
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe width= "500" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=Pune&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" />
            </div>
            <Button style={{position: 'absolute', bottom: '130px', right: '170px' }} color="secondary" variant="outlined">GET NEARBY HOSPITALS & PHARMACIES</Button>
            <Button style={{position: 'absolute', bottom: '130px', right: '0px' }} color="secondary" variant="outlined">EMERGENCY CALL</Button>
          </div>
        </div>
      </Container>

        <div className="user-root">
          <div className='doctor-root'>
          <img alt="Doctor Illustration" src={doctor} />
            <button className="btn third" onClick={doctorLogin}>DOCTOR LOGIN</button>
          </div>

          <div className='patient-root'>
            <button className="btn third" onClick={handleClick}>PATIENT LOGIN</button>
            <img alt="Patient Illustration" src={patient} />
          </div>
        </div>
      </div>
      </div>
  )
}
{/* <button type="button" onClick={handleClick}>
      Patient Login
    </button> */}