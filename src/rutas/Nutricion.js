import React from 'react';
import Category from './../nutricion/Category';
import Veggie from './../nutricion/Veggie';
import Popular from './../nutricion/Popular';
import Search from './../nutricion/Search';


function Nutricion() {
  return (
    <div className='contenedor-nutricion'>
      <Search/>
      <Category/>
      <Veggie/>
      <Popular/>
    </div>
  )
}

export default Nutricion