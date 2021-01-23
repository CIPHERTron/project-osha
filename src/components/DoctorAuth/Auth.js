import React from 'react';
import './login.css';

import {useHistory} from 'react-router-dom'

export default function Login(props) {
 const hasAccount = true;
 let history = useHistory();
 
 return (
		<section className="login">
		 <div  className='loginContainer'>
			<h1 style={{color: '#fff', textAlign: 'center'}}>DOCTOR'S LOGIN</h1>
   {/* <p style={{color: '#fff', textAlign: 'center'}}>The one stop solution for all your healthcare needs</p><hr /><br /> */}
			{!hasAccount && <label>Enter your name</label>}
			{!hasAccount && <input autoFocus required type="text" />}
			<label>Email ID</label>
			<input type="text" autoFocus required />

				<label>Password</label>
			<input type="password" required />

				<div className="btnContainer">
    <button>Login</button>
     
			</div>
			<button style={{width: '20rem', margin: '0 auto'}} onClick={() => {history.push('/')}}>BACK TO HOME</button>
			</div>
			
		</section>
	)

}