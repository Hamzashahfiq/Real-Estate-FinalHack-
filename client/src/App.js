import React, { useEffect, useState } from 'react'
import Routing from './navigation/Routing'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useDispatch } from 'react-redux';
import { CurrentUser } from './store/AuthSlice';
import { Box } from '@mui/material';
import ProgressLoader from './commonComponents/progressLoader/ProgressLoader';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProperty } from './store/ProductSlice';

export default function App() {
  const [currentUserLoading, setCurrentUserLoading] = useState(true);
  const [getProductLoading, setGetProductLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(currentUserLoading)
    dispatch(CurrentUser({ setCurrentUserLoading }))
    dispatch(getProperty({ setGetProductLoading }))
  }, [])
  if (currentUserLoading || getProductLoading) {
    return (
      <Box component='div' sx={{
        height: '100vh', width: '100%', display: 'flex',
        justifyContent: 'center', alignItems: 'center'
      }}>
        <ProgressLoader />
      </Box>
    )
  }
  return (
    <div>
      <ToastContainer />
      <Routing />
    </div>

  )
}
