import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard(props) {
  const handleDelete = () => {
    props.setter(offre => offre.filter(e => e.id !== props.id))
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div">
          {props.nom}


        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.prenom}
        </Typography>
        <Typography variant="body2">

          <br />
          {props.offre}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
        <Button size="small" onClick={handleDelete}>Delete</Button>
      </CardActions>
    </Card>
  );
}