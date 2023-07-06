import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home'
import ListIcon from '@mui/icons-material/List';
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Toolbar 
        className='text-blue-600 bg-slate-200
                   border-blue-500 border-t-2'
        sx={{ borderBottom: 1}}>
        <Button>
          <Link to='/'>
            <HomeIcon/>
          </Link>
        </Button>
        <Typography
          component="h2"
          variant="h3"
          fontFamily="Roboto"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Ken Parks
        <Typography 
          className='text-blue-600/75'
          component="h5"
          variant="h5">
          Software Engineer
        </Typography>
        </Typography>
          <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <ListIcon/>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>
            <Link to='/blog'>
              Blog
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/portfolio'>
              Portfolio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to='/resume'>
              Resume
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </>
  );
}

export default Header;