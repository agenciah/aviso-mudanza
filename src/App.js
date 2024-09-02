import React from 'react';
import Form from './form';
import { Container, Typography } from '@mui/material';
import logo from './images/Residentia Logo without name.png';

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" style={{ width: '150px', marginBottom: '20px' }} />
        <Typography variant="h3" component="h1" style={{ color: '#262161' }}>
          Formulario de Mudanza
        </Typography>
      </header>
      <Form />
    </Container>
  );
}

export default App;
