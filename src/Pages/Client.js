import React from 'react';
import Navigation from '../Components/Navigation/Index'
import './Client.scss'
import Card from '../Components/Card/Index'
import FormInput from '../Components/FormInput'
import Button from '../Components/Button/Index'
import { v4 } from 'uuid'
import { useMyContext } from '../context/UserContext';



const Home = () => {
  const { users, setusers} = useMyContext([]);

    let nom = ""
    let prenom = ""
    let offre = ""
  

  const getNom = (event) => {
    nom = event.target.value
    console.log(nom)
  }
  const getPrenom = (event) => {
    prenom = event.target.value
    console.log(prenom)
  }
  const getOffre = (event) => {
    offre = event.target.value
    console.log(offre)
  }

  
  const send = () =>{

    const newUser = {
      id:v4(),
      nom,
      prenom,
      offre
    }
    
    
    setusers((prev) => ([...prev, newUser]))

   const a = document.querySelector("#nom")
   console.log(a)
    
    // document.querySelector('#prenom').value = '';
    // document.querySelector('#offre').value = '';

  }

  return (
    <div className='Home'>
      <div className='nav'>
        <Navigation />
      </div>

      <div className='all'>

        <div className='left'>

          <FormInput onChange={getNom} label="Nom" id="nom" />
          <FormInput onChange={getPrenom} label="Prenom" id="prenom" />
          <FormInput onChange={getOffre} label="Offre" id="offre" />
          <Button onClick={send}>Send</Button>


        </div>
        <div className='right'>

          {users.map(e => <Card key={e.key} nom={e.nom} prenom={e.prenom} offre={e.offre} />)}




        </div>
      </div>
    </div>
  );
};

export default Home;