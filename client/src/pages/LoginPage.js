import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';


export const LoginPage = () => {

  const { login } = useContext( AuthContext );

  const [form, setForm] = useState({
    email: 'Laura@gmail.com',
    password: '1212121',
    rememberme: false
  });

  //para que se guarde email en localStorage (solo en el login)
  useEffect(() =>{
    const email = localStorage.getItem('email');
    if( email) {
      setForm( (form) => ({
        ...form,
        email,
        rememberme: true,
        
      }));
    }
    

  }, [])

  //para poder cambiar email y password
  const onChange = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form, //mantenga esos valores
      [name]: value //el que cambiará

    })

  }





  //para el check de "recordarme"
  const toggleCheck = () => {
    console.log('??');
    setForm({
      ...form,
      rememberme: !form.rememberme //será el opuesto
    })

  }



  //funciona
  const submit = async(e) => {
    e.preventDefault()  

    if( form.rememberme ){
      localStorage.setItem('email', form.email);
    } else {
      localStorage.removeItem('email');
    }

    const{ email, password } = form;
    
    const ok = await login( email, password );
   
    //si es false el login
    if ( !ok ){
      Swal.fire('Error', 'verifique el usuario y contraseña', 'error');
    }
  
  }


  return (
    <>
      <FormContainer >
        <form
          className="login100-form validate-form flex-sb flex-w"
        >
          <div className="brand">
            <img src="" alt="Logo" />
            <h1>CHAT REAL LIVE</h1>
          </div>
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="off"
            value={form.email}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={form.password}
            onChange={onChange}
          />

          <div className="row mb-3">
            <div
              className="col"
              onClick={() => toggleCheck()}
            >
              <input
                className="input-checkbox100"
                id="ckb1"
                type="checkbox"
                name="rememberme"
                checked={form.rememberme}
                readOnly
              />
              <label className="label-checkbox100">
                Recordarme
              </label>
            </div>

            <div className="col text-right">
              <Link to="/auth/register">
                Nueva cuenta?
              </Link>
            </div>
          </div>

          <div className="container-login100-form-btn m-t-17">
            <button
              onClick={submit}
              className="login100-form-btn"
              
            >
              Ingresar
            </button>
          </div>


        </form>

      </FormContainer>


    </>

  )
};


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
    border-radius: 0.7rem;
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

