import AcercaDe from "../pages/AcercaDe/AcercaDe";
import Contacto from "../pages/Contacto/Contacto";
import Home from "../pages/Home/Home";
import InicioSesion from "../pages/InicioSesion/InicioSesion";
import Registro from "../pages/Registro/Registro";
import Servicios from "../pages/Servicios/Servicios";

export let enrutador = [
    {
        path: "/",
        element: <InicioSesion />
    },
    {
        path: "/registro",
        element: <Registro />
    },
    {
        path:"/home",
        element: <Home />
    },
    {
        path: "/servicios",
        element: <Servicios />
    },
    {
        path: "/contacto",
        element: <Contacto/>
    },
    {
        path: "/acerca-de",
        element: <AcercaDe />
    }
]