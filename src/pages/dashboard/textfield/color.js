import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ColorTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      {/* Outlined with purple color */}
      <TextField
        label="Outlined Purple"
        variant="outlined"
        focused
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#9c27b0', // Purple color for the outline
            },
            '&:hover fieldset': {
              borderColor: '#ba68c8', // Lighter purple on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7b1fa2', // Darker purple when focused
            },
          },
        }}
      />

      {/* Filled with green color */}
      <TextField
        label="Filled Green"
        variant="filled"
        focused
        sx={{
          '& .MuiFilledInput-root': {
            backgroundColor: '#e8f5e9', // Light green background
            '&:hover': {
              backgroundColor: '#c8e6c9', // Darker green on hover
            },
            '&.Mui-focused': {
              backgroundColor: '#a5d6a7', // Darker green when focused
            },
          },
        }}
      />

      {/* Standard with warm color */}
      <TextField
        label="Standard Warm"
        variant="standard"
        focused
        sx={{
          '& .MuiInput-underline:before': {
            borderBottomColor: '#ff7043', // Warm orange color
          },
          '&:hover .MuiInput-underline:before': {
            borderBottomColor: '#ff8a65', // Lighter warm tone on hover
          },
          '&.Mui-focused .MuiInput-underline:after': {
            borderBottomColor: '#d84315', // Darker warm tone when focused
          },
        }}
      />
    </Box>
  );
}
