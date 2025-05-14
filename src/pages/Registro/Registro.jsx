import { AtSymbolIcon, EnvelopeIcon, LockClosedIcon, UserCircleIcon } from "@heroicons/react/16/solid"
import { alertaRedireccion } from "../../helpers/funciones";
import { Link, useNavigate } from "react-router-dom";
import './Registro.css'

const Registro = () => {
  let navigate = useNavigate()

    function redireccionarAlLogin(event) {
        event.preventDefault()
            alertaRedireccion(
                navigate,
                "El usuario registrado correctamente",
                "En breves segundos será redireccionado al login",
                "success",
                "/"
            );}
            
    return (
        <div className='form-container'>
            <form className="form">
                <figure>
                    <img className='logo-inicio-sesion' src="https://mcmeventos.com/cdn/shop/files/Logo_MCM_Fondo_Oscuro.png?v=1719200101&width=375" alt="Logo mcm eventos" />
                </figure>
                <h1 id="heading">Registro</h1>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                        <AtSymbolIcon />
                    </svg>
                    <input
                        autoComplete="off" placeholder="Usuario" className="input-field" type="text" />
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                        <LockClosedIcon />
                    </svg>
                    <input
                        placeholder="Contraseña" className="input-field" type="password" />
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                        <UserCircleIcon />
                    </svg>
                    <input
                        type="text" placeholder="Nombre" className="input-field" />
                </div>
                <div className="field">
                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                        <EnvelopeIcon />
                    </svg>
                    <input
                        type="text" placeholder="Correo" className="input-field" />
                </div>
                <div className="btn">
                    <button
                        onClick={(event) => redireccionarAlLogin(event)}
                        className="beautiful-button">Registrar</button>
                </div>
                <div>
                    <Link to="/">¿Ya tienes una cuenta?</Link>
                </div>
            </form>
        </div>
    )
}

export default Registro