import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { MaterialSymbolsLightAdd } from '../buttons/buttons_icon/add';

export default function FloatingActionButtonSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <MaterialSymbolsLightAdd />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <MaterialSymbolsLightAdd />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <MaterialSymbolsLightAdd />
      </Fab>
    </Box>
  );
}
