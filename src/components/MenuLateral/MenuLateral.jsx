import { Link, NavLink, useNavigate } from "react-router-dom"
import { alertaRedireccion } from "../../helpers/funciones"
import './MenuLateral.css'
const MenuLateral = () => {
    let navigate = useNavigate()

    let usuario = JSON.parse(localStorage.getItem("usuario"))
    function cerrarSesion() {
        localStorage.removeItem("token")
        localStorage.removeItem("usuario")
        alertaRedireccion(navigate, "Sesion finalizada", "En Breves segundos cerraremos la sesión", "info", "/")
    }
    return (
        <aside className="aside-nav-container">
            <nav>
                <ul>
                    <section>
                        <Link to="/home">
                        <figure>
                            <img className='logo-inicio-sesion' src="https://mcmeventos.com/cdn/shop/files/Logo_MCM_Fondo_Oscuro.png?v=1719200101&width=375" alt="Logo mcm eventos" />
                        </figure>
                        </Link>
                    </section>
                    <section>
                        <li> 
                            <NavLink to="/servicios" className={({ isActive }) => isActive ? 'active' : ''}><button className="animated-button">
                            <span>Servicios</span>
                            <span></span>
                        </button> </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>
                            <button className="animated-button">
                            <span>Contacto</span>
                            <span></span> 
                            </button> 
                            </NavLink>
                            </li>
                        <li>
                            <NavLink to="/acerca-de" className={({ isActive }) => isActive ? 'active' : ''}>
                            <button className="animated-button">
                            <span>Acerca de</span>
                            <span></span> 
                            </button>
                            </NavLink>
                        </li>
                        <li><button type="button" className="cerrar-sesion-button" onClick={cerrarSesion}><span>Cerrar sesion</span><span></span></button></li>
                    </section>
                </ul>
            </nav>
        </aside>
    )
}

export default MenuLateral
