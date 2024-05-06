import './App.css'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ROUTES } from "./routes/ROUTES.jsx";

const routesa = createBrowserRouter(ROUTES)
function App() {
  return (
<>
<RouterProvider router={routesa}/>
</>
  )
}

export default App
