import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Switch} from 'react-router-dom';
import Home from "./screens/Home/Home";
import CCuenta from "./screens/CCuenta/CCuenta";
import Login from "./screens/Login/Login"
import Detalle from "./screens/Detalle/Detalle";
import Favoritos from "./screens/Favoritos/Favoritos";
import NotFound from "./screens/NotFound/NotFound";
import ResultadosBusqueda from "./screens/ResultadosBusqueda/Resultados";
import VerMasPP from "./screens/VerMasPP/VerMasPP";
import VerMasPC from "./screens/VerMasPC/VerMasPC";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/crearcuenta" component={CCuenta} />
        <Route path="/login" component={Login} />
        <Route path="/detalle/:id" component={Detalle} />
        <Route path="/favoritos" component={Favoritos} />
        <Route path="/resultadodebusqueda/:nombre" component={ResultadosBusqueda} />
        <Route path="/vermaspp" component={VerMasPP} />
        <Route path="/vermaspc" component={VerMasPC} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
