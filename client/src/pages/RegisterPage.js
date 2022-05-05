import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import Swal from 'sweetalert2';

import { AuthContext } from '../auth/AuthContext';

export const RegisterPage = () => {

  const { register } = useContext( AuthContext );

  const [form, setForm] = useState({
    email: 'antonia@gmail.com',
    password: '11111',
    username: 'antoni'
  });


  const onChange = ({ target }) =>{
    const { name, value } = target;
    setForm({
      ...form, //mantenga esos valores
      [name]: value //el que cambiará

    })

  }

  const submit = async(e) => {
    e.preventDefault()  

    const{ email, password, username } = form;
    
    const msg = await register( username, email, password );
   
    //si es false 
    if ( msg !== true ){
      Swal.fire('Error', msg, 'error');
    }
  
  }


  return (
    <>
      <FormContainer>
        <form >
          <div className="brand">
            <img src="" alt="Logo" />
            <h1>CHAT REGISTRO</h1>
          </div>
          <input 
          type="text" 
          placeholder="Username" 
          name="username" 
          autoComplete="off"
          value={ form.username}
          onChange={ onChange }
          />
          <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          autoComplete="off"
          value={ form.email}
          onChange={ onChange }
          />
          <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          autoComplete="off"
          value={ form.password}
          onChange={ onChange }
          />
        <div className="row mb-3">
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                    </Link>
                </div>
        </div>

        <div className="container-login100-form-btn m-t-17">
                <button
                    onClick={submit}
                    className="login100-form-btn"
                    
                >
                    Crear cuenta
                </button>
            </div>
        </form>
        
      </FormContainer>
      
     
    </>
   
  )
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #0B5394;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #F43C3C;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
  
export default RegisterPage;
