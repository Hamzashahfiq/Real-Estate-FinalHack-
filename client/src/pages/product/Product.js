import React from 'react'
import { styles } from './ProductStyle'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useLocation } from "react-router-dom";
import ComButton from '../../commonComponents/ComButton';
import useProduct from './useProduct';
import { useSelector } from 'react-redux';

export default function Product() {
    const {
        itemQty,
        incrementHandler,
        decrementHandler,
        cartHandler
    } = useProduct()
    const location = useLocation();
    const data = location.state?.pData;
    return (
        <div style={styles.mainDiv}>
            <Box sx={{ flexGrow: 1, height: '85vh' }}>
                <Grid container spacing={2} sx={{ height: '100%' }}>
                    <Grid item xs={12} md={3}></Grid>
                    <Grid item xs={12} md={6} style={styles.productDiv}>
                        <div style={styles.imgDiv}>
                            <img src={data.imageUrl} height='300' width='100%' alt='product image' />
                        </div>
                        <div style={styles.pDetail} >
                            <Box component='div' sx={{ fontWeight: 'bold' }}>
                                {data.PropertyTitle }
                            </Box>
                            <div>
                            <Box component='span' sx={{fontWeight:'bold'}} >
                                Location:&nbsp;
                            </Box>
                            <Box component='span' >
                                {data.Location}
                            </Box>
                            </div>
                            <div>
                            <Box component='span' sx={{fontWeight:'bold'}} >
                                Property Type: &nbsp;
                            </Box>
                            <Box component='span'  >
                                {data.PropertyType}
                            </Box>
                            <Box component='span' sx={{px:3}} >
                                {data.FinishType}
                            </Box>
                            </div>
                            <div>
                            <Box component='span'  sx={{fontWeight:'bold'}}>
                                Bed Rooms: &nbsp;
                            </Box>
                            <Box component='span'  >
                                {data.Bedrooms}
                            </Box>
                            </div>
                            <div>
                            <Box component='span'  sx={{fontWeight:'bold'}}>
                                Name: &nbsp;
                            </Box>
                            <Box component='span'  >
                                Hamza Shafiq
                            </Box>
                            </div>
                            <div>
                            <Box component='span'  sx={{fontWeight:'bold'}}>
                                Contact#: &nbsp;
                            </Box>
                            <Box component='span'  >
                               0300-1234567
                            </Box>
                            </div>
                             
                            <Box component='span' sx={{ fontWeight: 'bold', paddingY: 2, display: 'inline-block' }}>
                                Price:&nbsp;
                            </Box>
                            <Box component='span'  >
                                {data.price}
                            </Box>
                        </div>
                        {/* <div style={styles.orders}>
                            <ComButton bText='Add to Cart' onPress={() => cartHandler(data)}/>
                            <div>
                                <ComButton bText='-' onPress={decrementHandler} />
                                <span style={styles.qty}>{itemQty}</span>
                                <ComButton bText='+' onPress={incrementHandler}  />
                            </div>

                        </div> */}
                    </Grid>
                    <Grid item xs={12} md={3}></Grid>
                </Grid>
            </Box>
        </div>
    )
}
