import React from 'react'
import { styles } from './LoginStyle'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputField from '../../commonComponents/InputField';
import ComButton from '../../commonComponents/ComButton';
import { Link } from 'react-router-dom';
import useLogin from './useLogin';
import ProgressLoader from '../../commonComponents/progressLoader/ProgressLoader';

export default function Login() {
  const {userDetail,statesHandler,LoginHandler,loginLoading } = useLogin()
  return (
    <div style={styles.mainDiv}>
      <div style={styles.innerDiv}>
        <Typography style={styles.innerDivText} variant="h4" gutterBottom component="div">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={LoginHandler}
          autoComplete="off"
          style={styles.form}
        // method="post"
        >
          <InputField type='text' value = {userDetail.userName} onChange={(e)=>statesHandler(e)}  label='User Name' name='userName' />
          <InputField type='password' value = {userDetail.password} onChange={(e)=>statesHandler(e)}  label='Password' name='password' />
          {
              loginLoading?
              <ProgressLoader size={26} customSx={{margin:'15px 0'}} />:
              <ComButton type='submit' bText='Login' />
            }
          <Typography variant="body1" gutterBottom component="span">
            Not have an account? <Typography component="span" style={styles.loginLinkText}>
              <Link to="/signup" style={styles.loginLink}>Sign Up</Link> </Typography>
          </Typography>
        </Box>


      </div>
    </div>
  )
}