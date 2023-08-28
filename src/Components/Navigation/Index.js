import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ComputerIcon from '@mui/icons-material/Computer';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('Home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <Link to="/Home">
        <BottomNavigationAction
          label="Home"
          value="Home"
          icon={<OtherHousesIcon />}
        />
      </Link>


      <Link to="/Client">
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={<PersonIcon />}
        />
      </Link>


      <Link to="/Product">
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<ComputerIcon />} />
    </Link>
    </BottomNavigation>

  );
}