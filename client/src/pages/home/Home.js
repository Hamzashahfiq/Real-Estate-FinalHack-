import { useEffect, useState } from 'react';
import { styles } from './HomeStyle';
import CommonCard from '../../commonComponents/commonCard/CommonCard';
import { useSelector, useDispatch } from "react-redux";
import { getProperty } from '../../store/ProductSlice';
import ProgressLoader from '../../commonComponents/progressLoader/ProgressLoader';
import { Box } from '@mui/material';
import CarouselCom from '../../carouselCom/CarouselCom';

export default function Home() {
    const [getProductLoading, setGetProductLoading] = useState(false)
    const propertys = useSelector((store) => store.ProductSlice.propertys)
    console.log({propertys})
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getProperty({ setGetProductLoading }))
    // }, [])

    if (getProductLoading) {
        return(
            <Box component='div' sx={{
                height: '100vh', width: '100%', display: 'flex',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <ProgressLoader />
            </Box>
        )
      
    }
    return (
        <div style={styles.mainDiv}>
             <CarouselCom data={propertys} />
            <div style={styles.cardDiv}>
                {propertys.map((item) => {
                    return (
                        <CommonCard pData={item} />
                    )
                })}

            </div>

        </div>
    )
}