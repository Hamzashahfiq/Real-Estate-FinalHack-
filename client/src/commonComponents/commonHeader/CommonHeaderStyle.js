import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
const CH = {
   HLink : styled(NavLink)(({  }) => ({
        textDecoration: 'none',
        margin:'0 8px',
        color: 'white',
          '&:hover': {
            color: '#fcd5ce',
          },
        
      })),
   HDLink : styled(NavLink)(({  }) => ({
        textDecoration: 'none',
        color: 'black',
        width:'100%',
          '&:hover': {
            color: '#a4c3b2',
          },
          '&:focus': {
            color: '#2b2d42',
          }
        
      })),
      activeStyle : {
        textDecoration: "none",
        color: '#fdf0d5',
        fontSize:'17px'
      },
      activeStylehd : {
        textDecoration: "none",
        color: '#9d8189',
        fontSize:'17px'
      }
}

export default CH