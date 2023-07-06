import React from 'react';
import Header from './Header';
import Box from '@mui/material/Box';
import error from './error.png';

function Error() {
  return (
    <>
      <Header/>
        <Box align="center"
             className='object-cover'>
          <img alt='404' src={error} />
        </Box>
    </>
  )
}

export default Error
