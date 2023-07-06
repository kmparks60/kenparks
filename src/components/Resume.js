import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Box from '@mui/material/Box'
import kp from './kp.png'

function Resume() {
  return (
    <>
    <Header/>
      <main className='bg-black'>
        <Box className='p-8'>
          <img alt='resume' src={kp} />
        </Box>
      </main>
    <Footer/>
    </>
  )
}

export default Resume
