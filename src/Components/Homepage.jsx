import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";

function Homepage() {
  return (
    <>
    <div className="App">
      {/* <header>
        <center>

        <h1>Welcome to PSG College of Technology</h1>
        </center>
      </header> */}
      <main>
         <marquee>
             Welcome to PSG College of Technology, a premier educational institution located in Coimbatore, India. Explore the various features and offerings of our esteemed college through the menu options.
            </marquee>
       
        <div style={{display:"flex",flexDirection:"row"}}>

        <Card sx={{ width: 300, display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                
                />
                <Link to={"/Departments"}>
              <CardContent>
                <Typography varient="h5" gutterBottom>
                  <center><b style={{fontFamily:"cursive"}}>Lectures</b></center>
                </Typography>
                
              </CardContent>
                </Link>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 300, display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                
                />
              <CardContent>
                <Typography varient="h5" gutterBottom>
                <center><b style={{fontFamily:"cursive"}}>Chatbox</b></center>
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 300, display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                
                />
              <CardContent>
                <Typography varient="h5" gutterBottom>
                <center><b style={{fontFamily:"cursive"}}>Resources</b></center>
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 300, display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                
                />
              <CardContent>
                <Typography varient="h5" gutterBottom>
                <center><b style={{fontFamily:"cursive"}}>Communication</b></center>
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ width: 300, display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                
                />
              <CardContent>
                <Typography varient="h5" gutterBottom>
                <center><b style={{fontFamily:"cursive"}}>Show Up</b></center>
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
          </div>

                {/* </Box> */}
      </main>
    
    </div>
      <footer>
        <p>&copy; 2024 PSG College of Technology. All rights reserved.</p>
      </footer>
      </>

  );
}

export default Homepage;