import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import useDelProperty from '../../pages/addProperty/delProduct/useDelProperty';
import ProgressLoader from '../progressLoader/ProgressLoader';
export default function CommonCard({ pData, delType }) {
const {delDataHandler,delLoader}  = useDelProperty()

let path
if (delType === 'del'){
  path = ""
}else{
  path = "/product"
}
  return (
    <Link to={path} state={{ pData }} style={{ textDecoration: 'none' }}>
      <Card sx={{ width: 345, margin: 3 ,"&:hover":{
        transform: 'scale(1.1)'
      },}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={pData.imageUrl}
            alt="product image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pData.PropertyTitle}
            </Typography>
            <Typography variant="body2" color="black" component="span" sx={{fontWeight:'bold'}}>
              Location:&nbsp;
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              {pData.Location}
            </Typography>
            <div style={{marginTop:'10px'}}>
              <Typography variant="body2" color="black" component="span" sx={{fontWeight:'bold'}}>
                Price:&nbsp;
              </Typography>
              <Typography variant="body2" color="text.secondary" component="span">
                {pData.price}Rs
              </Typography>
              {delType === 'del' && 
              <div style={{display:'flex',justifyContent:'right'}}>{delLoader?<ProgressLoader />:<IconButton color='primary' onClick={()=>delDataHandler(pData)}><DeleteForeverIcon/></IconButton> } </div>
              }
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
