import { createBrowserRouter, RouterProvider } from "react-router-dom"

const ContenidoPrincipal = () => {
  return (
    <div>
        <RouterProvider router={createBrowserRouter(enrutador)}/>
    </div>
  )
}

export default ContenidoPrincipal
