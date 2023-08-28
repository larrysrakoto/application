import React from 'react';
import Navigation from '../Components/Navigation/Index'
import Caroussel from '../Components/Caroussel/Index'
import './Home.scss'
import CardMedia from "../Components/CardMedia/Index"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Home = () => {
  return (
    <div className='Home'>
      <div className='nav'>
        <Navigation />
      </div>

      <div className='all'>
        <div className='left'>
          <Caroussel />


        </div>
        <div className='right'>
          <div className='title'>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Typography variant="h3" gutterBottom>
                Les Produits
              </Typography>
            </Box>
          </div>
          <div className='content'>
            <CardMedia />
            
          </div>

        </div>

      </div>
      
    </div>
  );
};

export default Home;