import React, { useEffect }  from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { movieContext } from '../context/ContextProvider';
import { useContext } from 'react';

const API_URL = "http://www.omdbapi.com/?apikey=b89dabf6";

export default function FilterIcon() {
  const {title,setTitle,setMovie} = useContext(movieContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Filter the data with Type:Movie
  const filterMovie = async() => {
    try{
    const res = await fetch(`${API_URL}&s=${title}&type=movie`);
    const data = await res.json();
    setMovie(data.Search)
    handleClose();
    }catch(err){
        console.log(err);
    }
  }

  //Filter the data with Type:Series
  const filterSeries = async() => {
    try{
    const res = await fetch(`${API_URL}&s=${title}&type=series`);
    const data = await res.json();
    setMovie(data.Search)
    handleClose();
    }catch(err){
        console.log(err);
    }
  }

  ////Filter the data with Type:Episode
  const filterEpisode = async() => {
    try{
    const res = await fetch(`${API_URL}&s=${title}&type=episode`);
    const data = await res.json();
    setMovie(data.Search)
    handleClose();
    }catch(err){
        console.log(err);
    }
  }

  //Filter the data with Type:Game
  const filterGame = async() => {
    try{
    const res = await fetch(`${API_URL}&s=${title}&type=game`);
    const data = await res.json();
    setMovie(data.Search)
    handleClose();
    }catch(err){
        console.log(err);
    }
  }
  useEffect(() => {
    setTitle("Batman");
  },[])
  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div className='text-2xl'>
            🗂️
        </div>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={filterSeries}>Series</MenuItem>
        <MenuItem onClick={filterEpisode}>Episodes</MenuItem>
        <MenuItem onClick={filterMovie}>Movies</MenuItem>
        <MenuItem onClick={filterGame}>Games</MenuItem>
      </Menu>
    </div>
  );
}
