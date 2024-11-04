import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { Typography, Paper, Button, Box, TextField } from '@mui/material';

const Login = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("login") === "ok") {
            setIsLoggedIn(true);
        }
    }, []);

    const handleClick = () => {
        if (password === "Jelszo123") {
            localStorage.setItem("login", "ok");
            setIsLoggedIn(true);  // Jelzi, hogy a felhasználó bejelentkezett
        } else {
            setError(true);
        }
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
        if (error) setError(false);
    };

    if (isLoggedIn) {
        return <Navigate to="/home" />;  // Továbbnavigálás a /home oldalra
    }

    return (
        <Box sx={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/haz.jpg)`,
            width: '100vw',
            height: '100vh',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
        }} >
            <Box sx={{ pt: 15 }}>
                <Paper elevation={3} sx={{ width: "360px", mx: "auto", p: 5, display: "flex", flexDirection: "column", gap: 5 }}>
                    <Typography variant='h6'> Bejelentkezés</Typography>
                    <TextField label="Jelszó" onChange={handleChange} type='password' error={error} helperText={error && "A jelszó nem megfelelő"} />
                    <Button variant='contained' onClick={handleClick}>Belépés</Button>
                </Paper>
            </Box>
        </Box>
    );
};

export default Login;
