import * as React from 'react';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import { SocialIcon } from 'react-social-icons';
import kp from './KP.png'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <>
      <Box sx={{p: 2 }} 
           component="footer"
           className='bg-slate-800'>
      <Grid className='place-items-center flex flex-row justify-between'
            container 
            direction="row" 
            columns={4}>
        <div>
          <img className='w-48' alt='logo' src={kp}/>
        </div>
        <div className='place-items-center'>        
          <Typography
            variant="h8"
            align="center"
            component="h8"
            className='text-cyan-400 pt-2 underline underline-offset-8'>
              Coding solutions to fit your every need
          </Typography>
        </div>
        <div>
          <Typography
            variant="h6"
            align="center"
            component="h6"
            className='text-slate-200 underline underline-offset-8'
            >
            Connect With Me
          </Typography>
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
        </div>
        <div className='pr-10'>
          <Typography
            variant="h6"
            alignt="left"
            component='h6'
            className='text-slate-200 underline underline-offset-8 pb-2'>
            Navigate
          </Typography>
          <Link className='text-slate-200 p-2' to='/portfolio'>Portfolio</Link><br/>
          <Link className='text-slate-200 p-2' to='/blog'>Blog</Link><br/>
          <Link className='text-slate-200 p-2' to='/resume'>Resume</Link>
        </div>
      </Grid>
      </Box>
    </>
  )
}

export default Footer
