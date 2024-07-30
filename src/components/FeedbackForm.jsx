// FeedbackForm.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

function FeedbackForm({ onClose }) {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', address: '', country: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = "First Name is required.";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required.";
    if (!formData.address) tempErrors.address = "Address is required.";
    if (!formData.country) tempErrors.country = "Country is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    if (!formData.phone) tempErrors.phone = "Phone number is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission, e.g., send data to server
      console.log('Form Data:', formData);
      setFormData({ firstName: '', lastName: '', address: '', country: '', email: '', phone: '' });
      onClose();
    }
  };

  return (
    <Box sx={{ width: 400, bgcolor: 'background.paper', padding: 4, borderRadius: 2 }}>
      <Typography variant="h6">Thank you so much for taking the time!</Typography>
      <h5>Please provide the below details.</h5>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          fullWidth
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          error={!!errors.firstName}
          helperText={errors.firstName}
          margin="normal"
        />
        <TextField
          label="Last Name"
          fullWidth
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          error={!!errors.lastName}
          helperText={errors.lastName}
          margin="normal"
        />
        <TextField
          label="Address"
          fullWidth
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          error={!!errors.address}
          helperText={errors.address}
          margin="normal"
        />
        <TextField
          label="Country"
          fullWidth
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          error={!!errors.country}
          helperText={errors.country}
          margin="normal"
        />
        <TextField
          label="Email"
          fullWidth
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
          margin="normal"
        />
        <TextField
          label="Phone Number"
          fullWidth
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          error={!!errors.phone}
          helperText={errors.phone}
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Button variant="outlined" onClick={onClose}>Cancel</Button>
          <Button variant="contained" type="submit">Submit Feedback</Button>
        </Box>
      </form>
    </Box>
  );
}

export default FeedbackForm;
