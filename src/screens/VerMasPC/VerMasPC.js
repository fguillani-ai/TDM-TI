import React from 'react';
import PCartel from "../../components/PCartel/PCartel";
import SearchForm from "../../components/SearchForm/SearchForm";

function VerMasPC() {
  return (
    <>
        <h1>CINEPOLIS</h1>
        <SearchForm />
        <h2>Peliculas en Cartel</h2>        
        <PCartel />
    </>
  );
}

export default VerMasPC;