import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';

export const RegisterPage = () => {

  const onChange = () =>{

  }

  const onSubmit = () =>{

  }

  const todoOk = () => {};


  return (
    <>
      <FormContainer>
        <form onSubmit={ onSubmit }>
          <div className="brand">
            <img src="" alt="Logo" />
            <h1>CHAT REGISTRO</h1>
          </div>
          <input 
          type="text" 
          placeholder="Username" 
          name="username" 
          autoComplete="off"
          onChange={ onChange }
          />
          <input 
          type="email" 
          placeholder="Email" 
          name="email" 
          autoComplete="off"
          onChange={ onChange }
          />
          <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          autoComplete="off"
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
                    type="submit"
                    className="login100-form-btn"
                    disabled={ !todoOk() }
                >
                    Crear cuenta
                </button>
            </div>
        </form>
        
      </FormContainer>
      
      <ToastContainer />
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
