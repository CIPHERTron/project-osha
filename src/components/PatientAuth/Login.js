import React from 'react';
import './login.css';

import {useHistory} from 'react-router-dom'

export default function Login(props) {
	let history = useHistory();
 const {
		email,
		setEmail,
		password,
		setPassword,
		handleLogin,
		handleSignup,
		hasAccount,
		setHasAccount,
		emailError,
		passwordError,
		name,
		setName
 } = props;
 
 return (
		<section className="login">
		 <div  className='loginContainer'>
			<h1 style={{color: '#fff', textAlign: 'center'}}>Welcome to OSHA</h1>
   <p style={{color: '#fff', textAlign: 'center'}}>The one stop solution for all your healthcare needs</p><hr /><br />
			{!hasAccount && <label>Enter your name</label>}
			{!hasAccount && <input autoFocus required type="text" value={name} onChange={(e) => setName(e.target.value)} />}
			<label>Email ID</label>
			<input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
    <p className="errorMsg">{emailError}</p>

				<label>Password</label>
			<input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    <p className="errorMsg">{passwordError}</p>

				<div className="btnContainer">
     {hasAccount ? (
       <>
							 <button onClick={handleLogin}>Login</button>
								{}
								<p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
							</>
						) : (
							<>
							 <button onClick={handleSignup}>Sign Up</button>
								<p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
							</>
						)}
			</div>
			<button style={{width: '20rem', margin: '0 auto'}} onClick={() => {history.push('/')}}>BACK TO HOME</button>
			</div>
			
		</section>
	)

}