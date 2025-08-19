import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Navbar.css";


export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <nav className="nav-links">
                            <Link to="/">Home</Link>
                            <Link to="/movies">List of Movies</Link>
                        </nav> 
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
