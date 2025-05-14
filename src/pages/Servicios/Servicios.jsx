import { useEffect, useState } from "react"
import MenuLateral from "../../components/MenuLateral/MenuLateral"
import ServiceCard from "../../components/ServiceCard/ServiceCard"
import './Servicios.css'

const Servicios = () => {
  const [Services, setServices] = useState();
  let servicios = [{
    "id": "1",
    "url": "https://mcmeventos.com/cdn/shop/files/Portada_Home_Pagina_-_MCM_fbf983f9-7356-4b2f-a6ea-377424ca2005.png?v=1745618220",
    "nombre": "Carrera Expedicion Bodytech",
    "fecha": "Domingo, 8 de junio de 2025",
    "lugar": "Medellín",
    "distancias": [
      "3K",
      "6k",
      "12K"
    ],
    "precio": 130000
  },
  {
    "id": "2",
    "url": "https://mcmeventos.com/cdn/shop/files/Portada_MMCordoba_26fa4072-e1bb-4b3e-8ab4-d73680a0c94a.png?v=1740411138",
    "nombre": "Media Maratón Cordoba",
    "fecha": "Domingo, 15 de junio de 2025",
    "lugar": "Montería",
    "distancias": [
      "5K",
      "10K",
      "21K"
    ],
    "precio": 160000
  },
  {
    "id": "3",
    "url": "https://mcmeventos.com/cdn/shop/files/Portada_Maraton_Medellin_2025.png?v=1740164881",
    "nombre": "Maratón Medellín",
    "fecha": "6 - 7 de septiembre de 2025",
    "lugar": "Medellín",
    "distancias": [
      "5K",
      "10K",
      "21K",
      "42K"
    ],
    "precio": 240000
  }
]
  return (
    <div className="container-all">
      <MenuLateral />
      <main className="main">
        <h1 className="services-main-title">Servicios</h1>
        <section className='service-cards-container'>
          {
            servicios.map((service) => {
              return <ServiceCard key={service.id} data={service}/>
            })
          }
        </section>
      </main>
    </div>
  )
}

export default Servicios
