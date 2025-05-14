import './ServiceCard.css'

const ServiceCard = (data) => {
    console.log
  return (
    <div className='service-card'>
      <figure>
        <img src={data.data.url} alt={data.data.nombre} />
      </figure>
      <div className='text-service-card-container'>
        <h3 className='title-name'>{data.data.nombre}</h3>
        <p className='date'>Fecha: {data.data.fecha}</p>
        <p className='place'>Lugar: {data.data.lugar}</p>
        <h4 className='distances-title'>Distancias:</h4>
        <ul className='distances'>{
            data.data.distancias.map((distancia) => {return <li>{distancia}</li>})
            }
        </ul>
        <p className='price'>Precio inscripcion: {data.data.precio}</p>
      </div>
    </div>
  )
}

export default ServiceCard
