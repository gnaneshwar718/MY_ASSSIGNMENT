import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  homeContainer: {
    textAlign: 'center',
    paddingTop: '50px',
  },
  ctaButtons: {
    marginTop: '30px',
    '& > *': {
      margin: '10px',
    }
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <h1>Welcome to Our Social Media Platform</h1>
      <p>Share your thoughts, moments, and stories with the world.</p>
      <div className={classes.ctaButtons}>
        <Button component={Link} to="/posts/create" variant="contained" color="primary">
          Create a Post
        </Button>
        <Button component={Link} to="/analytics" variant="outlined" color="primary">
          View Analytics
        </Button>
        
        <Button component={Link} to="/postslist" variant="outlined" color="primary">
          Post List
        </Button>
      </div>
    </div>
  );
};

export default Home;