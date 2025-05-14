import MenuLateral from "../../components/MenuLateral/MenuLateral"
import './Contacto.css'

const Contacto = () => {
  return (
    <div className="container-all">
      <MenuLateral />
      <main className="main-container-contacto main">
        <h1 className="contacto-main-title">Contactanos</h1>
        <section className="contacto-main-container">
            <div className="imagen-contacto"></div>
            <form action="">
                <div>
                    <label htmlFor="Nombre">Nombre</label>
                <input type="text" placeholder="Escribe tu nombre completo" required/>
                </div>
                <div>
                    <label htmlFor="Correo">Correo electronico</label>
                    <input type="email" placeholder="Escribe tu correo de contacto" required />
                </div>
                <div>
                    <label htmlFor="Telefono">Telefono</label>
                    <input type="number" placeholder="Escribe tu número de telefono o de celular" required/>
                </div>
                <div>
                    <label htmlFor="Mensaje">Mensaje</label>
                    <textarea placeholder="Cuentanos sobre tu evento"></textarea>
                </div>
                <div className="container-terminos">
                    <input type="checkbox" className="ui-checkbox"/>
                    <span>Al enviar este mensaje estoy aceptando el tratamiento de mis datos enviados en el formulario</span>
                </div>
                <div>
                    <button className="contacto-form-button">Envía tu mensaje</button>
                </div>
            </form>
        </section>
      </main>
    </div>
  )
}

export default Contacto
