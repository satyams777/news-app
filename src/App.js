import React, { useState } from 'react';
import { Container, Button, Grid, Typography, Modal, Box } from '@mui/material';
import CardList from './components/CardList';
import ViewToggle from './components/ViewToggle';
import FeedbackForm from './components/FeedbackForm';
import PaginationComponent from './components/PaginationComponent'; // Import the PaginationComponent

function App() {
  const [isListView, setIsListView] = useState(true);
  const [showForm, setShowForm] = useState(false);

  return (
    <Container>
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={2} style={{marginTop:'80px', backgroundColor:'cyan'}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , gap:14}} >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5">Hi Reader,</Typography>
              <Typography variant="subtitle1">Here’s your News!</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5">View Toggle</Typography>
              <ViewToggle isListView={isListView} setIsListView={setIsListView} />
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5">Have a Feedback?</Typography>
              <Button variant="contained" color="secondary" onClick={() => setShowForm(true)}>
                We're Listening
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={9}>
          <CardList isListView={isListView} />
          <PaginationComponent /> {/* Add the PaginationComponent here */}
        </Grid>
      </Grid>
      <Modal open={showForm} onClose={() => setShowForm(false)}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <FeedbackForm onClose={() => setShowForm(false)} />
        </Box>
      </Modal>
    </Container>
  );
}

export default App;
