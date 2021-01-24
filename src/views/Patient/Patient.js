import React from 'react';
import './Patient.css'
import {Link as ScrollLink} from 'react-scroll'

import {Button, makeStyles} from '@material-ui/core'

import fitness from '../../assets/fitness.png'
import doctorqr from '../../assets/doctorqr.png'
import PatientForm from '../../components/PatientForm/PatientForm'
import Camera from './Camera'

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const useStyles = makeStyles((theme) => ({
  chatbot: {
    position: 'absolute',
    right: 0,
    bottom: 0
  }
}));

export default function Patient(props) {
  const classes = useStyles();
  const {handleLogout, email, uid} = props;

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  

  const steps = [
    {
      id: "0",
      message: `Hello!`,
      trigger: "1"
    },
    {
      id: "1",
      message: "My name is Xori",
      trigger: "2"
    },
    {
      id: "2",
      message: "And I'm your personal health companion",
      trigger: "3"
    },
    {
      id: "3",
      message: "How can I assist you?",
      end: true
    }
  ];



  return (
    <div className="patient-page-root">
      <header className='navbar'>
        <div className='navbar__title navbar__item'>OSHA</div>
        <div className='navbar__item'><Button color="secondary" onClick={handleLogout}>Logout</Button></div>        
      </header>

      <div className="profile-card">
        <h1>WELCOME</h1>
        <h2>Email: <span>{email}</span></h2>
        <h3>UNIQUE ID: <span>{uid}</span></h3>
      </div>

      <div className="patient-main-section">
        <div className="asl">
        <ScrollLink to='asl' smooth={true} offset={50} duration={2000}><button><h1 style={{color: '#000'}}>ASL</h1></button></ScrollLink>
        </div>

        <div className="appointment">
        <PatientForm email={email} uid={uid} />
        </div>

        <div className="ar">
        <ScrollLink to='augment' smooth={true} offset={50} duration={2000}><button><h3 style={{color: '#000'}}>AR/VR ASSISTANT</h3></button></ScrollLink>
          
        </div>
        
      </div>

      <div id="asl" style={{transform:"translateX(25%) translateY(50%)"}} >
          {/* <h2 align="center">ASL to Speech</h2> */}
          <Camera></Camera>
      </div>

      
      <div id="augment">
      <div>
      <img src={fitness} className="fitness" alt="Fitness Model QR" />
      </div>
      <div>
      <img src={doctorqr} className="doctor" alt="Personal Assistant Model QR" />
      </div>
      </div>

      <div id="doctor-appointment">
        <form>
        
        </form>
      </div>



      <div className={classes.chatbot}>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider></div>
    </div>
  );
}