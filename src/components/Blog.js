import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import tart from './tart.webp';
import vs from './vs.png';
import psql from './psql.png';
import js1 from './js1.png';
import cj from './cj.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const blogs= [{
  img: tart, 
  title: "Tarts to Tech:\nProofing My Career", 
  description: "Proofing my full-stack career...",
  link: "https://medium.com/@kmparks60/tartes-to-tech-fd357e9907b8"
},
{ 
  img: vs, 
  title: "5 VS Code Extensions That Will Save You Time 🕑",
  description: "Save time and effor with these 5 extensions...",
  link: "https://medium.com/@kmparks60/2-5-vs-code-extensions-that-will-save-you-time-4b141f2bb8d1"
},
{
  img: psql,
  title: "Understanding Python Classes and Transitioning into SQL",
  description: "A phase 3 students view on classes and db tables...",
  link: "https://medium.com/@kmparks60/understanding-python-and-transitioning-into-sql-642e3b7dff50"
},
{
  img: js1, 
  title: "let blogTopic='JS Basics pt.1'",
  description: "JavaScript basics explained...",
  link: "https://medium.com/@kmparks60/let-blogtopic-js-basics-pt-1-f14b0569e8a9"
},
{
  img: cj,
  title: "Flatiron Junction What's Your function()",
  description: "JavaScript functions 101...",
  link: "https://medium.com/@kmparks60/flatiron-junction-whats-your-function-1cc4fc795601"
}
];

function Blog() {

  return (
    <>
      <Header/>
        <main className='bg-black pt-2 pb-24'>
        <Container sx={{ py: 8 }} maxWidth="md" className='bg-black rounded-md'>
          <Grid container spacing={4}>
            {blogs.map((blog) => (
              <Grid item key={blog} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <img alt='blogs' src={blog.img} />
                  <CardContent className='bg-slate-400' sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {blog.title}
                    </Typography>
                  </CardContent>
                  <Link target="_blank" rel="noopener noreferrer" to={blog.link}>
                    <Typography component="h6"
                                variant="h6"
                                className='bg-slate-400 text-blue-600 pb-2 pl-2 underline'>
                      Continue Reading...
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

export default Blog
