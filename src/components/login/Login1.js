import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login.module.css';

function Login1() {
    const[text, setText]  =useState('')
    const[text1, setText1]  =useState('')
    const navigate = useNavigate();
   
    return (
        <div className={Login.intro}>
            <div className={Login.main}>
            <h1>Unic.com</h1>

            </div>
            
            <div className={Login.container}>
                
                <form onSubmit={(event) => navigate('../dashboard', event.preventDefault(), (console.log(text,text1)))}>
                    <label>User name/Gmail</label>
                    <input type='gmail'value={text} name="" onChange={(e)=>setText(e.target.value)}  className={Login.input}/>

                    <label>New Password</label>
                    <input type='password'value={text1} name="" onChange={(e)=>setText1(e.target.value) }  className={Login.input}/>

                    <input type="submit" className={Login.btn} disabled={!text || !text1}/>
                </form>

            </div>

            
        </div>
    );
}

export default Login1;