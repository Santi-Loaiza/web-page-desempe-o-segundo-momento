import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/16/solid'
import './InicioSesion.css'
import { Link, useNavigate } from 'react-router-dom'
import {alertaRedireccion } from '../../helpers/funciones';
import { useState } from 'react';

const InicioSesion = () => {
    let navigate= useNavigate()
    const [getUsuario, setUsuario] = useState("usuario")
    
    function redireccionAlHome(event) {
        event.preventDefault()
        alertaRedireccion(
            navigate,
            "Bienvenido " + getUsuario,
            "En breves segundos será redireccionado al Home",
            "success",
            "/home"
          );
          let horaInicio = new Date();
          console.log(horaInicio);
          // setHoraLogin(horaInicio)
          // console.log(getHoraLogin);
      }

    return (
        <div className='form-container'>
            <form className="form">
                <figure>
                    <img className='logo-inicio-sesion' src="https://mcmeventos.com/cdn/shop/files/Logo_MCM_Fondo_Oscuro.png?v=1719200101&width=375" alt="Logo mcm eventos" />
                </figure>
                <h1 id="heading">Inicia sesion</h1>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                        <AtSymbolIcon />
                    </svg>
                    <input
                        onChange={(e) => setUsuario(e.target.value)}
                        autoComplete="off" placeholder="Usuario" className="input-field" type="text" />
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                        <LockClosedIcon />
                    </svg>
                    <input
                        placeholder="Contraseña" className="input-field" type="password" />
                </div>
                <div className="btn">
                    <button 
                    onClick={(event) => redireccionAlHome(event)}
                    className="beautiful-button">Iniciar sesion</button>
                </div>
                <div>
                    <Link to="/registro">¿No tienes una cuenta?</Link>
                </div>
            </form>
        </div>
    )
}

export default InicioSesion
