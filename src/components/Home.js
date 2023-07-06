import * as React from 'react';
import Header from './Header';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import js from './JS.png';
import react from './react.png';
import python from './python.png';
import flask from './flask.png'
import mui from './mui.png';
import tailwind from './tailwind.png';
import flatiron from './flatiron.png'
import EmailIcon from '@mui/icons-material/Email';
import { SocialIcon } from 'react-social-icons';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider'
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from './Footer';

const cards = [{
  img: js,
},
{
  img: react
},
{
  img: python
},
{
  img: mui
},
{
  img: tailwind
},
{
  img: flask
}
];

function Home() {
  return (
    <>
      <Header/>
      <main className='bg-black pb-24'>
        {/* Hero unit */}
        <Box
          className='bg-black'
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Box className='bg-slate-400 rounded-md p-6'>
            <Typography 
              className='text-blue-700'
              fontFamily="Segoe UI Emoji"
              align="center" 
              paragraph>
              Hi I'm Ken Parks, a software engineer who builds full-stack applications. Recently I've started working on an E-Commerce CRM
              that pairs with SalesForce. I am currently looking for a full-time role as a developer.<br/><br/>
              In my spare time you can find me listening to the "How I Built This" podcasts, pair programming with
              my former classmates, working on new projects, or spending time with my family. If you have and questions or if our interests match up 
              please reach out. I look forward to connecting with you.
            </Typography>
            </Box>
            <Link to='/resume'>
              <Typography className='text-slate-200 text-center underline 
                                     underline-offset-8 pt-8'
                      component="h5"
                      variant="h5">
                View Resume
              </Typography>
            </Link>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button className='bg-white' variant="contained">
                  <Typography> 
                    <a href="https://www.linkedin.com/in/kenmparks/" target="_blank" rel="noreferrer">
                      <SocialIcon network="linkedin"
                                  className='bg-slate-200 rounded-xl' 
                                  style={{height:24, width:24}}/> 
                    </a>
                  </Typography>
              </Button>
              <Button onClick={() => window.location = 'mailto:kenparks.se@gmail.com'} variant="contained">
                <Link>
                  <Typography>
                    <EmailIcon/>
                  </Typography> 
                </Link>
              </Button>
              <Button className='bg-white' variant="contained">
                  <Typography> 
                    <a href="https://github.com/kmparks60" target="_blank" rel="noreferrer">
                      <SocialIcon network="github"
                                  className='bg-slate-50 rounded-xl' 
                                  style={{height:24, width:24}}/> 
                    </a>
                  </Typography>
              </Button>
            </Stack>
          </Container>
        </Box>
        <Divider className='p-4'/>
        <Container sx={{ py: 8 }} 
                   maxWidth="md"
                   className='bg-slate-600 rounded-md'>
          <Grid container spacing={4} className='place-content-center'>
          <ImageList sx={{ width: 500, height: 650 }} cols={2} rowHeight={164}>
            {cards.map((card) => (
            <ImageListItem key={card.img} className='w-40 place-content-center'>
              <img
                alt='alt'
                src={`${card.img}`}
                srcSet={`${card.img}`}
                loading="lazy"/>
            </ImageListItem>
          ))}
          </ImageList>
          <img className='w-2/3' alt='flatiron' src={flatiron}/>
          </Grid>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default Home
