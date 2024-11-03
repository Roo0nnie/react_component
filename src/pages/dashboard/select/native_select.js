import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function NativeSelectDemo() {
  const [age, setAge] = React.useState(30); 

  const handleChange = (event) => {
    setAge(event.target.value); 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="age-select-label">Age</InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={age}
          onChange={handleChange} 
          variant="outlined" 
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
