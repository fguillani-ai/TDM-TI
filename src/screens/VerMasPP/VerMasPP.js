import React from 'react';
import PPopulares from "../../components/PPopulares/PPopulares";
import SearchForm from "../../components/SearchForm/SearchForm";

function VerMasPP() {
  return (
    <>
        <h1>CINEPOLIS</h1>
        <SearchForm />
        <h2>Peliculas mas populares</h2>        
        <PPopulares />
    </>
  );
}

export default VerMasPP;