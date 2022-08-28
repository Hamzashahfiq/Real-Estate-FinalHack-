import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProgressLoader({size,customSx}) {
  return (
      <CircularProgress size={size || 25} sx ={customSx}/>
  );
}