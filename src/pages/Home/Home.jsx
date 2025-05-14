import MenuLateral from "../../components/MenuLateral/MenuLateral.jsx"
import './Home.css'


const Home = () => {
  return (
    <div className="container-all">
      <MenuLateral />
      <main className="main">
        <header className="header-home">
          <h1 className="main-title">LÍDERES EN EVENTOS DEPORTIVOS</h1>
          <h3 className="secundary-title">Estrategia y ejecución excepcional, con sello de excelencia</h3>
        </header>
      </main>
    </div>
  )
}

export default Home
