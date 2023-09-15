import "./App.css";
import { Formularios } from "./components/Formularios";
// import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";

function App() {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React</h1>
      <hr />
      {/* <TiposBasicos></TiposBasicos> */}
      {/* <ObjetosLiterales></ObjetosLiterales>*/}
      {/* <Funciones></Funciones> */}
      {/* <Contador></Contador> */}
      {/* <ContadorConHook></ContadorConHook> */}
      {/* <Login></Login> */}
      {/* <Usuarios></Usuarios> */}
      <Formularios></Formularios>
    </div>
  );
}

export default App;
