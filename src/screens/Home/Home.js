import React from 'react';
import PPopulares from "../../components/PPopulares/PPopulares";
import PCartel from "../../components/PCartel/PCartel";
import SearchForm from "../../components/SearchForm/SearchForm";
import Cookies from "universal-cookie";


function Home() {
  return (
    <>
        <h1>UdeSA Movies</h1>
        <SearchForm />
        <h2 className='alert alert-primary'>Peliculas mas populares</h2>        
        <PPopulares />
        <h2 className='alert alert-warning'>Peliculas en cartel</h2>
        <PCartel />
    </>
  );
}

export default Home;