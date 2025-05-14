import './AcercaDe.css'
import MenuLateral from "../../components/MenuLateral/MenuLateral"

const AcercaDe = () => {
  return (
    <div className="container-all">
      <MenuLateral />
      <main className="main-container-contacto main">
        <div className="background-title-quienes-somos">
            <h1 className="main-title-quienes-somos">¿Quienes somos?</h1>
        </div>
        <section className='container-main-info'>
            <p>Contamos con más de 30 años de experiencia y desde nuestra fundación en 2003, somos líderes en la organización de eventos deportivos y culturales en Colombia. Como entidad sin ánimo de lucro, hemos sido pioneros en carreras de calle como la Maratón de Medellín, reconocida como la competencia técnica más importante del país y avalada por la World Athletics y la Asociación Internacional de Maratones (AIMS). Incorporamos innovación constante con eventos como la Media Maratón del Mar, fortaleciendo nuestra oferta de experiencias que combinan deporte, cultura y turismo.</p>
            <p>Con sede en Medellín, trabajamos de la mano de prestigiosas marcas locales e internacionales para generar impacto social, fomentar el turismo deportivo y contribuir al desarrollo del deporte en el país, reafirmando nuestro compromiso con la excelencia, la integración y la transformación social a través del deporte.</p>
        </section>
        <section className='container-second-info'>
            <figure className='container-logo-acerca-de'>
                <img src="https://mcmeventos.com/cdn/shop/files/Logo_MCM_Color_fondo_blanco.png?v=1719238331&width=750" alt="" />
            </figure>
            <p>En MCM Operador de Eventos, vivimos convencidos del poder transformador del deporte y la cultura. Nuestra misión es diseñar y ejecutar experiencias que inspiren, integren y dejen huella.</p>
            <p>Gracias a la visión de nuestros socios fundadores, la Cámara Colombiana de laConstrucción (Camacol Antioquia) y la Liga de Atletismo de Antioquia, hemos logrado posicionar actividades que nos destacan por la excelente organización,y que promueven valores de comunidad, salud y superación personal.</p>
        </section>
        <section className='container-last-info'>
          <p>Trabajamos con pasión y profesionalismo para cumplir con nuestro propósito:crear experiencias memorables que conecten y motiven a personas detodas las edades, niveles y culturas.</p>
        </section>
        </main>
    </div>
  )
}

export default AcercaDe
