import * as React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { MaterialSymbolsDelete } from './buttons_icon/delete';

export default function IconButtonSizes() {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <IconButton aria-label="delete" size="small">
        <MaterialSymbolsDelete fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" size="small">
        <MaterialSymbolsDelete fontSize="small" />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <MaterialSymbolsDelete />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <MaterialSymbolsDelete fontSize="inherit" />
      </IconButton>
    </Stack>
  );
}
