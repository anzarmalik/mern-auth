import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Container, Typography } from '@mui/material';

function Application() {
    const [name, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await axios.get('/auth-dev-testing');
                setMessage(response.data.name);
            } catch (err) {
                setMessage('Error fetching message.');
            }
        };

        fetchMessage();
    }, []);

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                {`Hi ${name}, Welcome to the application.`}
            </Typography>
        </Container>
    );
}

export default Application;
