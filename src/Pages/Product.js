import React from 'react';
import Navigation from '../Components/Navigation/Index'
import './Client.scss'
import Card from '../Components/Card/Index'
import { useState } from 'react';


const Product = () => {
  let  [offre, setoffre] = useState( [])
  return (
    <div className='Home'>
      <div className='nav'>
        <Navigation />
      </div>

      <div className='all'>

        <div className='left'>


        </div>
        <div className='right'>
        { offre.map(e => <Card key={e.id} id={e.id} nom={e.nom} prenom={e.prenom} offre={e.offre} setter={setoffre}/>)}
        


      </div>
      </div>
    </div>
  );
};

export default Product;