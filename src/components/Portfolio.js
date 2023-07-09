import React from 'react';
import Header from './Header';
import Footer from './Footer';
import vault from './vault.png';
import bb from './bb.png';
import crm from './crm.png';
import lushly from './lushly.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const projects= [{
  img: vault, 
  title: "The Vault", 
  description: "Effortlessly manage your personal trading cards with our application, “The Vault”.",
  link: "https://github.com/JimTensen/GROUP-PROJECT"
},
{ 
  img: bb, 
  title: "Blockbuster Employee Portal",
  description: "Use our employee portal to seamlessly manage inventory and client data.",
  link: "https://github.com/CBurl1/blockbuster-employee-portal"
},
{
  img: crm,
  title: "Flatiron Pharmacy",
  description: "Enhance your business with the Flatiron Pharmacy CRM, designed to streamline customer interactions.",
  link: "https://github.com/kmparks60/FlatironPharmacy"
},
{
  img: lushly, 
  title: "Lushly",
  description: "E-Commerce CRM with full order tracking and notifications.",
  link: "https://github.com/bvinh2709/lushly"
}
];

function Portfolio() {
  return (
    <>
      <Header/>
        <main className='bg-black'>
          <Container sx={{ py: 8 }} maxWidth="md" className='bg-black rounded-md'>
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item key={project} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <img alt='repos' src={project.img} />
                  <CardContent className='bg-slate-400' sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography variant="p" align="left" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <Link target="_blank" rel="noopener noreferrer" to={project.link}>
                    <Typography component="h6"
                                variant="h6"
                                className='bg-slate-400 text-blue-600 pb-2 pl-2 underline'>
                      View GitHub Repo
                    </Typography>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Container>
        </main>
      <Footer/>
    </>
  )
}

export default Portfolio
