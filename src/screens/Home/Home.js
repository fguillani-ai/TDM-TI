import React from 'react';
import PPopulares from "../../components/PPopulares/PPopulares";
import PCartel from "../../components/PCartel/PCartel";
import SearchForm from "../../components/SearchForm/SearchForm";

function Home() {
  return (
    <>
        <h1>CINE HUB</h1>
        <SearchForm />
        <h2>Personajes mas populares</h2>        
        <PPopulares />
        <h2>Peliculas en cartel</h2>
        <PCartel />
    </>
  );
}

export default Home;