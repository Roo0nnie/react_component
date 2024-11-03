import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper', overflow: 'auto' }}
    >
      <List>
        {Array.from({ length: 200 }, (_, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
